import AnimationInView from '../../components/AnimationInView';
import Lottie from 'react-lottie';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Head from 'next/head';

import animationData from '../../assets/animations/maintenance.json';
import { ContainerMaintenance } from './style';

const defaultOptions = {
  loop: true,
  autoplay: true, 
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

export default function Maintenance() {
  return (
    <>
      <Head>
          <title>Manutenção | Educação Bento</title>
          <meta
            name="og:title"
            property="og:title"
            content='Manutenção | Educação Bento'
          />
          <meta
            name="description"
            content='Sua plataforma de estudos gratuita'
          />
      </Head>
      <Header />
      <AnimationInView>
        <ContainerMaintenance>
          <Lottie options={defaultOptions}
            height={500}
            width={500}/>
            <p>Essa página está em construção!! Volte mais tarde, pode ser que ela esteja pronta!!</p>
        </ContainerMaintenance>
      </AnimationInView>
      <Footer />
      </>
    );
}