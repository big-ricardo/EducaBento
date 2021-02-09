import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Prismic from 'prismic-javascript';
import { RichText } from 'prismic-reactjs';
import { Document } from 'prismic-javascript/types/documents';
import { useRouter } from 'next/router'
import materiasJson from '../../data/materias.json'
import { FormateData } from '../../utils/functions'
import {getMembers} from '../api/members'
import { Avatar } from 'antd';

import { client } from '../../utils/prismic_configuration';

import AnimationInView from '../../components/AnimationInView'
import Header from '../../components/Header'
import Presentation from '../../components/Post/Presentation'
import {AuthorProps} from '../../components/Post/Author'
import Materia,{post} from "../../components/Materia";
import Footer from "../../components/Footer";

interface PathProps {
  params: {
    author: string;
  };
}

interface PropTypes {
  posts: Array<post>,
  author: AuthorProps
}

export default function BlogPost({ posts, author }: PropTypes): JSX.Element {
  const { isFallback } = useRouter()

  if (isFallback) {
    return <h1>Carregando...</h1>
  }

  return (
    <>
      <Head>
        <title>Autor | {author.name}</title>
        <meta
          name="og:title"
          property="og:title"
          content={author.name}
        />
        <meta
          name="description"
          content={author.description}
        />
      </Head>
      <Header />

      <AnimationInView>
        <Presentation title={author.name} date={`${author.slug}`} description={author.description} avatar={author.avatar} />
      </AnimationInView>

       {posts.map(post => (
        <Materia post={post} key={post.slug} />
      ))}
      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {


  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: PathProps) => {

  const author:AuthorProps = await getMembers({ slug: params.author })

  const response = await client.query([
    Prismic.Predicates.at('document.type', 'blog_posts'),
    Prismic.Predicates.at('my.blog_posts.authorid', String(author[0].authorID))],
    { orderings: '[my.blog-post.date desc]', pageSize: 100 }
  )

   const posts = response.results.map((post) => (
    {
      materia: post.data.materia,
      title: post.data.title[0].text,
      slug: post.uid,
      description: post.data.description[0].text
    }
  )
  );

  return {
    props: {
      posts,
      author: author[0]
    },
    revalidate: 10
  };
};
