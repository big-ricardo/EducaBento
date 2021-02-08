import { GetStaticProps, GetStaticPaths } from 'next';
import Prismic from 'prismic-javascript';
import { RichText } from 'prismic-reactjs';
import { client } from '../../utils/prismic_configuration';
import { useRouter } from 'next/router'
import ApiSearchResponse from 'prismic-javascript/types/ApiSearchResponse';
import Head from 'next/head';
import materiasJson from '../../data/materias.json'

import api from '../../utils/api'

/*    Components*/
import AnimationInView from '../../components/AnimationInView'
import Header from '../../components/Header'
import Presentation from '../../components/Presentation'
import Materia, { post } from "../../components/Materia/OneMateria";
import Footer from "../../components/Footer";

interface PropTypes {
  posts: Array<post>,
  tag: string
}

export default function Home({ posts, tag }: PropTypes): JSX.Element {

  return (
    <>
      <Head>
        <title>Matéria | {materiasJson.object[tag].title}</title>
        <meta
          name="og:title"
          property="og:title"
          content={materiasJson.object[tag].title}
        />
        <meta
          name="description"
          content={materiasJson.object[tag].title}
        />

      </Head>
      <Header></Header>
      <AnimationInView>
        <Presentation title={materiasJson.object[tag].title} description="Sua plataforma de estudos gratuito" image={`/icons${materiasJson.object[tag].icon}`} />
      </AnimationInView>

      <h1 className='title'>Ultimas Publicações</h1>
      {posts !== [] ? (
        posts.map(post => (
          <Materia post={post} key={post.slug} />
        ))
      ) : (
         <h1>Sem Posts</h1>
      )}

      <Footer />
    </>
  );
}


interface ParamsProps{
  params:{
    tag: string}
}

export const getStaticProps: GetStaticProps = async (context:ParamsProps) => {

  const { tag } = context.params

  const response = await client.query([
    Prismic.Predicates.at('document.type', 'blog_posts'),
    Prismic.Predicates.at('my.blog_posts.materia', tag)],
    { orderings: '[my.blog-post.date desc]', pageSize: 100 }
  );

  const posts = response.results.map((post) => (
    {
      materia: post.data.materia,
      title: post.data.title[0].text,
      slug: post.uid,
      description: post.data.body[0].primary.text[0].text
    }
  )
  );

  return {
    props: {
      posts,
      tag
    },
    revalidate: 60
  };
};


export const getStaticPaths: GetStaticPaths = async () => {

  const tags = materiasJson.array.map(tag => (
    {
      params: { tag: tag.slug }
    }
  ))

  return {
    paths: tags,
    fallback: false,
  };
};

