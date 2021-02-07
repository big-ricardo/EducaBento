import { GetStaticProps } from "next";

import Prismic from 'prismic-javascript';
import { RichText } from 'prismic-reactjs';
import { client } from '../utils/prismic_configuration';
import ApiSearchResponse from 'prismic-javascript/types/ApiSearchResponse';

/*    Components*/
import AnimationInView from '../components/AnimationInView'
import Header from '../components/Header'
import Presentation from '../components/Presentation'
import Materia, {post} from "../components/Materia";
import Footer from "../components/Footer";
import Head from 'next/head';

interface PropTypes {
  posts: Array<post>;
}

export default function Home({ posts }: PropTypes): JSX.Element {

  return (
    <>
       <Head>
        <title>Sobre | Educação Bento</title>
        <meta
          name="og:title"
          property="og:title"
          content='Sobre | Educação Bento'
        />
        <meta
          name="description"
          content='Sua plataforma de estudos gratuita'
        />

      </Head>
      <Header></Header>
      <AnimationInView>
      <Presentation title="Sobre" description="Sua plataforma de estudos gratuito" image='/img/about.svg'/>
      </AnimationInView>


      <Footer />
    </>
  );
}


export const getStaticProps: GetStaticProps = async () => {

  return {
    props: {}
  };
};
