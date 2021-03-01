import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import Prismic from 'prismic-javascript';
import { useRouter } from 'next/router'
import { getMembers } from '../api/members'

import { client } from '@/src/config/prismic_configuration';
import Error from 'next/error'

import Header from '@/src/template/Header'
import Presentation from '@/src/components/Presentation'
import Materia from "@/src/components/Materias";
import Footer from "@/src/template/Footer";
import links from '@/src/data/links.json'
import { PostInterface } from '@/src/interfaces/Post';
import { MemberInterface } from '@/src/interfaces/Member';

interface PathProps {
  params: {
    member: string;
  };
}

interface PropTypes {
  posts: Array<PostInterface>,
  author: MemberInterface
}

export default function AuthorPage({ posts, author }: PropTypes): JSX.Element {

  if (!author) {
    return  <Error statusCode={404} />
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

      <Presentation title={author.name} date={`${author.occupation}`} description={author.description} avatar={`${links.AssetsbaseURL.members}${author.avatar}`} />

      <h1 className='title'>Publicações</h1>
      <Materia posts={posts} />
      <Footer />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {

  const members = await getMembers({}, { slug: 1, _id: 0 })

  const tags = members.map(member => (
    {
      params: { member: member.slug }
    }
  ))

  return {
    paths: tags,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: PathProps) => {

  const member = await getMembers({ slug: params.member })
  let posts = []

  if (member.length > 0) {
    const response = await client.query([
      Prismic.Predicates.at('document.type', 'blog_posts'),
      Prismic.Predicates.at('my.blog_posts.authorid', String(member[0].authorID))],
      { orderings: '[my.blog-post.date desc]', pageSize: 100 }
    )

     posts = response.results.map((post) => (
      {
        materia: post.data.materia,
        title: post.data.title[0].text,
        slug: post.uid,
        description: post.data.description[0].text
      }
    )
    );
  }

  return {
    props: {
      posts,
      author: member[0] || null
    },
    revalidate: 10
  };
};
