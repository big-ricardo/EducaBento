import { GetStaticProps } from "next";

import Prismic from 'prismic-javascript';
import { RichText } from 'prismic-reactjs';
import { client } from '../utils/prismic_configuration';
import ApiSearchResponse from 'prismic-javascript/types/ApiSearchResponse';

import api from '../utils/api'

/*    Components*/
import AnimationInView from '../components/AnimationInView'
import Header from '../components/Header'
import Presentation from '../components/Presentation'
import Materia, {post} from "../components/Materia";
import Footer from "../components/Footer";

interface PropTypes {
  posts: Array<post>;
}

export default function Home({ posts }: PropTypes): JSX.Element {

  return (
    <>
      <Header></Header>
      <AnimationInView>
      <Presentation />
      </AnimationInView>

        <h1 className='title'>Ultimas Publicações</h1>
      {posts.map(post => (
        <Materia post={post} key={post.slug} />
      ))}

      <Footer />
    </>
  );
}


export const getStaticProps: GetStaticProps = async () => {


  const response = await client.query(
    Prismic.Predicates.at('document.type', 'blog_posts'),
    { orderings: '[my.blog-post.date desc]', pageSize : 100  }
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

  const members = await api.get('/api/members').then(response=>response.data)

  return {
    props: {
      posts,
      members
    },
    revalidate: 60
  };
};
