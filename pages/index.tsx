import { GetStaticProps } from "next";

import Prismic from 'prismic-javascript';
import { RichText } from 'prismic-reactjs';
import { client } from '../utils/prismic_configuration';
import ApiSearchResponse from 'prismic-javascript/types/ApiSearchResponse';

import {getMembers} from './api/members'
import Head from 'next/head';

/*    Components*/
import AnimationInView from '../components/AnimationInView'
import Header from '../components/Header'
import Carrossel from '../components/Index/Carrossel'
import AllMaterias from "../components/Index/AllMaterias";
import Materia, { post } from "../components/Materia";
import Invitation from "../components/Index/Invitation";
import Team, { member } from "../components/Index/Team";
import Footer from "../components/Footer";

interface PropTypes {
  posts: Array<post>;
  members: Array<member>
}

export default function Home({ posts, members }: PropTypes): JSX.Element {

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
      {posts.map(post => (
        <Materia post={post} key={post.slug} />
      ))}
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
    revalidate: 60
  };
};
