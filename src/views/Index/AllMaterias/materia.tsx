import { motion } from "framer-motion";
import { Materia, ImageContainer } from './style'
import Link from "next/link";
import Image from "next/image";
import AnimationInView from '../../../components/AnimationInView'
import links from '../../../data/links.json'

interface MateriaInterface {
  materia: string;
  icon: string;
}

const MateriaComponent: React.FC<MateriaInterface> = ({ materia, children, icon }) => {
  return (
    <>
      <Link href={`${links.tag}/${materia}`}>
        <Materia whileHover={{ scale: 1.1 }} materia={materia}>
            <AnimationInView>
              <h2>{children}</h2>
            </AnimationInView>
              <ImageContainer>
                <Image src={`/icons${icon}`} layout='responsive' width='100px' height='100px' />
              </ImageContainer>
        </Materia>
      </Link>
    </>
  );
};

export default MateriaComponent;
