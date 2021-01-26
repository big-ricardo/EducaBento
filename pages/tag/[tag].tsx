import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Prismic from 'prismic-javascript';
import { RichText } from 'prismic-reactjs';
import  Document from 'prismic-javascript/types/ApiSearchResponse';
import {useRouter} from 'next/router'

import { client } from '../../utils/prismic_configuration';

interface PathProps {
  params: {
    tag: string;
  };
}

interface PropTypes {
  posts: Document;
}

export default function BlogPost({ posts }: PropTypes): JSX.Element {

  const { isFallback } = useRouter()

    if (isFallback) {
        return <h1>Carregando...</h1>
    }


  return (
    <>
      <Head>
        <title>Tag</title>
        <meta name="og:title" property="og:title" content="Blog" />
        <meta
          name="description"
          content="Blog sobre conteúdos de desenvolvimento web com JavaScript"
        />
      </Head>
      <div>
        {posts?.results.map((post) => (
          <Link href="/post/[uid]" as={`/post/${post.uid}`} key={post.uid}>
            <a>
              <div>
                <p>
                  {RichText.render(post.data.title)}
                  <br />
                  {RichText.render(post.data.description)}
                  <br />
                  {RichText.render(post.data.author)}
                  <br />
                  {RichText.render(post.data.description)}
                  <br />
                  <span>{post.data.formattedDate}</span>
                </p>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {

  const allBlogPosts = [];

  return {
    paths: allBlogPosts,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: PathProps) => {

  const {tag} = params

  const mapNumberToMonth = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];

 const posts = await client.query(
    Prismic.Predicates.at('document.tags', [tag]),
     { orderings : '[my.blog-post.date desc]' }
  );

  posts.results.map((post) => {
    const dateArray = post.data.date.split('-');
    post.data.formattedDate = `${dateArray[2]} de ${
      mapNumberToMonth[dateArray[1] - 1]
    } de ${dateArray[0]}`;
  });

  return {
    props: {
      posts,
    },
    revalidate: 30
  };
};
