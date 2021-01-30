import { GetStaticProps } from "next";
import Header from '../components/Header'
import Carrossel from '../components/Carrossel'
import AnimationInView from '../components/AnimationInView'
import  Materia from "../components/Material";

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
          <Materia/>
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
