import { motion } from "framer-motion";
import { TeamContainer } from './style'
import Link from "next/link";
import Image from "next/image";
import AnimationInView from '../../AnimationInView'
import { ImageContainer, TextContainer, Button } from "./style";

export default function MateriaComponent() {

  return (
    <>
      <AnimationInView>
        <TeamContainer>
          <ImageContainer whileHover={{ scale: 1.1 }}>
            <Image src='/img/team.svg' layout='responsive' width='500px' height='500px' />
          </ImageContainer>
          <TextContainer>
            <h1>Faça parte dessa equipe!</h1>
            <div>
              <p>Venha nos ajudar nessa jornada!</p>
              <p>Se você é professor, estudante de ensino superior, vestibulando e quer ajudar muitos outros a alcançarem
               seus objetivos. Todos serão muito bem vindos!</p>
            </div>
            <Link href='#'>
              <Button  whileHover={{transform:"translateX(5px)"}}>
                PARTICIPAR
            </Button>
            </Link>
          </TextContainer>
        </TeamContainer>
      </AnimationInView>
    </>
  );
};
