import { GetStaticProps } from "next";

import Prismic from 'prismic-javascript';
import { client } from '../src/config/prismic_configuration';

import {getMembers} from './api/members'
import Head from 'next/head';

/*    Components*/
import AnimationInView from '../src/components/AnimationInView'
import Header from '../src/template/Header'
import Carrossel from '../src/views/Index/Carrossel'
import AllMaterias from "../src/views/Index/AllMaterias";
import Materia, { post } from "../src/components/Materias";
import Invitation from "../src/views/Index/Invitation";
import Team from "../src/views/Index/Team";
import {MemberProps} from "../src/views/Post/Author";
import Footer from "../src/template/Footer";

interface PropTypes {
  posts: Array<post>;
  members: Array<MemberProps>
}

export default function HomePage({ posts, members }: PropTypes): JSX.Element {

  return (
    <>
      <Head>
        <title>Educação Bento</title>
        <meta
          name="og:title"
          property="og:title"
          content='Educação Bento'
        />
        <meta
          name="description"
          content='Sua plataforma de estudos gratuita'
        />

      </Head>
      <Header></Header>
      <AnimationInView>
        <Carrossel />
      </AnimationInView>
      <AllMaterias />
      <h1 className='title'>Ultimas Publicações</h1>
      <Materia posts={posts}/>
      <Invitation />
      <Team members={members} />
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await client.query(
    Prismic.Predicates.at('document.type', 'blog_posts'),
    { orderings: '[my.blog-posts.date desc]', pageSize: 4 }
  );

  const posts = response.results.map((post) => (
    {
      materia: post.data.materia,
      title: post.data.title[0].text,
      slug: post.uid,
      description: post.data.description[0].text
    }
  )
  );

  const members = await getMembers({ authorID: { $ne: 0 } })

  return {
    props: {
      posts,
      members
    },
    revalidate: 10
  };
};
