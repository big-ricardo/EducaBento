/*    Components*/
import AnimationInView from '../src/components/AnimationInView'
import Header from '../src/template/Header'
import Presentation from '../src/components/Presentation'
import Footer from "../src/template/Footer";
import About from "../src/views/About";
import Head from 'next/head';
import SVGAbout from '../src/assets/img/about.svg'
import { PostInterface } from '@/src/interfaces/Post';

interface PropTypes {
  posts: Array<PostInterface>;
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
        <Presentation title="Sobre" description="Sua plataforma de estudos gratuito"> <SVGAbout/> </Presentation>
      </AnimationInView>

      <AnimationInView>
        <About />
      </AnimationInView>

      <Footer />
    </>
  );
}
