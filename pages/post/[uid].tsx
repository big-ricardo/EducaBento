import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import Prismic from 'prismic-javascript';
import { RichText } from 'prismic-reactjs';
import { Document } from 'prismic-javascript/types/documents';

import materiasJson from '@/src/data/materias.json'
import { FormateData } from '@/src/utils/functions'
import {getMembers} from '../api/members'
import links from '@/src/data/links.json'

import { client } from '@/src/config/prismic_configuration';

import AnimationInView from '@/src/components/AnimationInView'
import Header from '@/src/components/Header'
import Presentation from '@/src/components/Presentation'
import Author,{MemberProps} from '@/src/views/Post/Author'
import {getPostViews} from '../api/page-views'
import Post from "@/src/views/Post";
import Footer from "@/src/components/Footer";
import { useViewportScroll } from "framer-motion"
import axios from 'axios';


interface PathProps {
  params: {
    uid: string;
  };
}

interface PropTypes {
  post: Document,
  author: MemberProps
}

export default function PostPage({ post, author }: PropTypes): JSX.Element {

  const { scrollYProgress } = useViewportScroll()
  let isData = false

  scrollYProgress.onChange(()=>{
    if(scrollYProgress.get() >= 0.8 && isData === false){
      isData = true
      axios.get(`/api/page-views?id=${post.id}`)
    }
  })

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
        <Presentation title={RichText.asText(post.data.title)} description={RichText.asText(post.data.description)} date={post.data.formattedDate} views={post.data.views} image={`${links.AssetsbaseURL.icons}${materiasJson.object[post.data.materia].icon}`} />
      </AnimationInView>

      <div>
        <Post post={post} />
        <Author member={author}/>
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

  const author:MemberProps = await getMembers({ authorID})

   response.data.views = await getPostViews(Number(response.id))

  return {
    props: {
      post: response,
      author: author[0]
    },
    revalidate: 10
  };
};
