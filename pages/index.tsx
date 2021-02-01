import { GetStaticProps } from "next";

import Prismic from 'prismic-javascript';
import { RichText } from 'prismic-reactjs';
import { client } from '../utils/prismic_configuration';
import ApiSearchResponse from 'prismic-javascript/types/ApiSearchResponse';

/*    Components*/
import AnimationInView from '../components/AnimationInView'
import Header from '../components/Header'
import Carrossel from '../components/Index/Carrossel'
import AllMaterias from "../components/Index/AllMaterias";
import Materia from "../components/Materia";
import Invitation from "../components/Index/Invitation";
import Team from "../components/Index/Team";
import Footer from "../components/Footer";

interface post {
  materia: string;
  title: string;
  slug: string;
  description: string;
};

interface PropTypes {
  posts: Array<post>
}

export default function Home({ posts }: PropTypes): JSX.Element {

  return (
    <>
      <Header></Header>
      <AnimationInView>
      <Carrossel />
      </AnimationInView>
      <AllMaterias />
      {posts.map(post => (
        <Materia post={post} key={post.slug} />
      ))}
      <Invitation />
      <Team />
      <Footer />
    </>
  );
}


export const getStaticProps: GetStaticProps = async () => {


  const response = await client.query(
    Prismic.Predicates.at('document.type', 'blog_posts'),
    { orderings: '[my.blog-post.date desc]' }
  );

  const posts = response.results.map((post) => (
    {
      materia: post.data.materia[0].text,
      title: post.data.title[0].text,
      slug: post.uid,
      description: post.data.description[0].text
    }
  )
  );

  return {
    props: {
      posts,
    },
    revalidate: 10
  };
};
