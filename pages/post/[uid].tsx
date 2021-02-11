import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Prismic from 'prismic-javascript';
import { RichText } from 'prismic-reactjs';
import { Document } from 'prismic-javascript/types/documents';
import { useRouter } from 'next/router'
import materiasJson from '../../src/data/materias.json'
import { FormateData } from '../../src/utils/functions'
import {getMembers} from '../api/members'
import links from '../../src/data/links.json'

import { client } from '../../src/utils/prismic_configuration';

import AnimationInView from '../../src/components/AnimationInView'
import Header from '../../src/components/Header'
import Presentation from '../../src/components/Presentation'
import Author,{AuthorProps} from '../../src/views/Post/Author'
import Post from "../../src/views/Post";
import Footer from "../../src/components/Footer";

interface PathProps {
  params: {
    uid: string;
  };
}

interface PropTypes {
  post: Document,
  author: AuthorProps
}

export default function BlogPost({ post, author }: PropTypes): JSX.Element {
  const { isFallback } = useRouter()

  if (isFallback) {
    return <h1>Carregando...</h1>
  }

  return (
    <>
      <Head>
        <title>Post | {RichText.asText(post.data.title)}</title>
        <meta
          name="og:title"
          property="og:title"
          content={RichText.asText(post.data.title)}
        />
        <meta
          name="description"
          content={RichText.asText(post.data.description)}
        />
      </Head>
      <Header />

      <AnimationInView>
        <Presentation title={RichText.asText(post.data.title)} description={RichText.asText(post.data.description)} date={post.data.formattedDate} image={`${links.AssetsbaseURL.icons}${materiasJson.object[post.data.materia].icon}`} />
      </AnimationInView>

      <div>
        <Post post={post} />

        <Author author={author}/>
      </div>
      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await client.query(
    Prismic.Predicates.at('document.type', 'blog_post'),
    { orderings: '[my.post.date desc]' }
  );

  const allBlogPosts = [];

  posts.results.map((post) => {
    allBlogPosts.push({ params: { uid: post.uid } });
  });

  return {
    paths: allBlogPosts,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: PathProps) => {

  const response = await client.getByUID('blog_posts', params.uid, {
    lang: 'pt-br',
  });

  response.data.formattedDate = FormateData({ post: response })

  const authorID = parseInt(response.data.authorid)

  const author:AuthorProps = await getMembers({ authorID})

  return {
    props: {
      post: response,
      author: author[0]
    },
    revalidate: 10
  };
};
