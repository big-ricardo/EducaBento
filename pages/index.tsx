import { GetStaticProps } from "next";
import AnimationInView from '../components/AnimationInView'
import Header from '../components/Header'
import Carrossel from '../components/Index/Carrossel'
import AllMaterias from "../components/Index/AllMaterias";
import Materia from "../components/Materia";
import Invitation from "../components/Index/Invitation";
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
      <AllMaterias />
      {/* <Materia post={{}}/> */}
      <Invitation />
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
