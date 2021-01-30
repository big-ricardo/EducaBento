import { GetStaticProps } from "next";
import Header from '../components/Header'
import Carrossel from '../components/Index/Carrossel'
import AnimationInView from '../components/AnimationInView'
import Materia from "../components/Index/Material";
import Team from "../components/Index/Team";
import Footer from "../components/Footer";


interface PropTypes {
  posts: object
}

export default function Home({ posts }: PropTypes): JSX.Element {
  return (
    <>
      <Header></Header>
      <AnimationInView>
        <Carrossel />
      </AnimationInView>
      <Materia />
      <Team />
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {

  return {
    props: {
    },
    revalidate: 10
  };
};
