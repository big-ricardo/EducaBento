import { GetServerSideProps } from "next";

import { useRouter } from 'next/router'

import Prismic from 'prismic-javascript';
import { client } from '../src/config/prismic_configuration';

import { getMembers } from './api/members'

/*    Components*/
import AnimationInView from '../src/components/AnimationInView'
import Header from '../src/components/Header'
import Presentation from '../src/components/Presentation'
import Materia, { post } from "../src/components/Materia";
import Footer from "../src/components/Footer";
import Search from "../src/views/Search";
import Head from 'next/head';
import { ParsedUrlQuery } from "querystring";

export default function SearchPage({ posts, members }): JSX.Element {

  const { query } = useRouter()
  const { q } = query

  return (
    <>
      <Head>
        <title>Pesquisa | Educação Bento</title>
        <meta
          name="og:title"
          property="og:title"
          content='Search | Educação Bento'
        />
        <meta
          name="description"
          content='Sua plataforma de estudos gratuita'
        />

      </Head>
      <Header></Header>
      <AnimationInView>
        <Presentation title="Pesquisa" description={q ? `Resultados relacionados sobre: ${q}` : "Sua plataforma de estudos gratuito"} image='/img/Search.svg' />
      </AnimationInView>

      <AnimationInView>
        <Search posts={posts} members={members} q={q} />
      </AnimationInView>

      <Footer />
    </>
  );
}

interface QueryProps {
  q: string
}

export const getServerSideProps: GetServerSideProps = async (context) => {

  const { query } = context
  const { q } = query

  let posts = []
  let members = []
  // if (query.q) {
  //   const response = await client.query([
  //     Prismic.Predicates.at('document.type', 'blog_posts'),
  //     Prismic.Predicates.fulltext('document', String(q))
  //   ], { orderings: '[my.blog-post.date desc]', pageSize: 100 }).catch((e) => {
  //     console.log(e)
  //   })

  //   if (response && response.total_results_size > 0) {
  //     posts = response.results.map((post) => (
  //       {
  //         materia: post.data.materia,
  //         title: post.data.title[0].text,
  //         slug: post.uid,
  //         description: post.data.description[0].text
  //       }
  //     )
  //     );
  //   }

    members = await getMembers({
      name: { $regex: new RegExp(String(q)), $options: 'i' }
    }, { _id: 0, authorID: 0 })
  //}

  return {
    props: {
      posts,
      members
    }
  }
}
