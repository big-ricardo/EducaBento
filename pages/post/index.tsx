import { GetStaticProps } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import Prismic from 'prismic-javascript';
import { RichText } from 'prismic-reactjs';

import { client } from '../../utils/prismic_configuration';
import ApiSearchResponse from 'prismic-javascript/types/ApiSearchResponse';
// import { Document } from 'prismic-javascript/types/documents';

interface PropTypes {
  posts: ApiSearchResponse;
  // home: Document;
}

export default function Home({ posts }: PropTypes): JSX.Element {
  return (
    <>
      <Head>
        <title>Educação Bento</title>
        <meta name="og:title" property="og:title" content="Blog" />
        <meta
          name="description"
          content="Blog sobre conteúdos de desenvolvimento web com JavaScript"
        />
      </Head>
      <div>
        {posts.results.map((post) => (
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

export const getStaticProps: GetStaticProps = async () => {
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

  // const home = await client.getSingle('blog_post', {
  //   orderings: '[my.post.date desc]',
  // });

  const posts = await client.query(
    Prismic.Predicates.at('document.type', 'blog_posts'),
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
      // home,
    },
    revalidate: 10
  };
};
