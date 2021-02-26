import { GetStaticProps } from "next";

import Prismic from 'prismic-javascript';
import { RichText } from 'prismic-reactjs';
import { client } from '../src/config/prismic_configuration';
import ApiSearchResponse from 'prismic-javascript/types/ApiSearchResponse';

/*    Components*/
import AnimationInView from '../src/components/AnimationInView'
import Header from '../src/components/Header'
import Presentation from '../src/components/Presentation'
import Materia, {post} from "../src/components/Materia";
import Footer from "../src/components/Footer";
import About from "../src/views/About";
import Head from 'next/head';

interface PropTypes {
  posts: Array<post>;
}

export default function AboutPage({ posts }: PropTypes): JSX.Element {

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

         <AnimationInView>
           <About />
         </AnimationInView>

      <Footer />
    </>
  );
}
