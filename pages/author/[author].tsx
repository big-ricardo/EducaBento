import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import Prismic from 'prismic-javascript';
import { useRouter } from 'next/router'
import {getMembers} from '../api/members'

import { client } from '@/src/config/prismic_configuration';

import AnimationInView from '@/src/components/AnimationInView'
import Header from '@/src/components/Header'
import Presentation from '@/src/components/Presentation'
import {MemberProps} from '@/src/views/Post/Author'
import Materia,{post} from "@/src/components/Materia";
import Footer from "@/src/components/Footer";
import links from '@/src/data/links.json'

interface PathProps {
  params: {
    author: string;
  };
}

interface PropTypes {
  posts: Array<post>,
  author: MemberProps
}

export default function AuthorPage({ posts, author }: PropTypes): JSX.Element {
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
        <Presentation title={author.name} date={`${author.occupation}`} description={author.description} avatar={`${links.AssetsbaseURL.members}${author.avatar}`} />
      </AnimationInView>
      <h1 className='title'>Publicações</h1>
      <Materia posts={posts}/>
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

  const author:MemberProps = await getMembers({ slug: params.author })

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
