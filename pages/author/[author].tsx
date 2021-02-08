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

import { client } from '../../utils/prismic_configuration';

import AnimationInView from '../../components/AnimationInView'
import Header from '../../components/Header'
import Presentation from '../../components/Presentation'
import Author,{AuthorProps} from '../../components/Post/Author'
import Post from "../../components/Post";
import Footer from "../../components/Footer";

interface PathProps {
  params: {
    author: string;
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
        <Presentation title={author.name} description={author.description} image={`/authors${author.avatar}`} />
      </AnimationInView>

      <div>
        <Author author={author}/>
      </div>
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

  const author:AuthorProps = await getMembers({ authorID: Number(params.author)})

  const response = await client.query([
    Prismic.Predicates.at('document.type', 'blog_posts'),
    Prismic.Predicates.at('my.blog_posts.authorid', params.author)],
    { orderings: '[my.blog-post.date desc]', pageSize: 100 }
  );

  return {
    props: {
      post: response,
      author: author[0]
    }
  };
};
