import { motion } from "framer-motion";
import { Materia, ImageContainer } from './style'
import Link from "next/link";
import Image from "next/image";
import AnimationInView from '../AnimationInView'


interface MateriaInterface {
  materia: string;
  icon: string;
}

const MateriaComponent: React.FC<MateriaInterface> = ({ materia, children, icon }) => {
  return (
    <>
      <Materia materia={materia}>
        <AnimationInView>
          <h2>{children}</h2>
        </AnimationInView>
        <AnimationInView>
          <ImageContainer>
            <Image src={icon} layout='responsive' width='100px' height='100px' />
          </ImageContainer>
        </AnimationInView>
      </Materia>

    </>
  );
};

export default MateriaComponent;
