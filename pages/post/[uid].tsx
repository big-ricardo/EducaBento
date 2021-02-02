import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Prismic from 'prismic-javascript';
import { RichText } from 'prismic-reactjs';
import { Document } from 'prismic-javascript/types/documents';
import { useRouter } from 'next/router'

import { client } from '../../utils/prismic_configuration';

interface PathProps {
  params: {
    uid: string;
  };
}

interface PropTypes {
  post: Document;
}

export default function BlogPost({ post }: PropTypes): JSX.Element {
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
      <div>
        {RichText.render(post.data.title)}
        <span>{post.data.formattedDate}</span>

        {post.data.body.map((section, ind) => (
          <div key={ind}>
            {RichText.render(section.primary.text)}
          </div>
        ))}

        <Link href="/">
          <a>
            <button>
              Voltar
            </button>
          </a>
        </Link>
      </div>
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
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: PathProps) => {
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

  const post = await client.getByUID('blog_posts', params.uid, {
    lang: 'pt-br',
  });

  const dateArray = post.data.date.split('-');
  post.data.formattedDate = `${dateArray[2]} de ${
    mapNumberToMonth[dateArray[1] - 1]
    } de ${dateArray[0]}`;

  return {
    props: {
      post,
    },
    revalidate: 60
  };
};
