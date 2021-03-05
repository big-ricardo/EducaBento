import { motion } from "framer-motion";
import { Materia, ImageContainer } from './style'
import Link from "next/link";
import Image from "next/image";
import AnimationInView from '../../../components/AnimationInView'
import links from '../../../data/links.json'
import materiasJson from '@/src/data/materias.json'

interface MateriaInterface {
  materia: string;
  icon: string;
}

const OneMateriaComponent: React.FC<MateriaInterface> = ({ materia, children, icon }) => {
  return (
    <>
      <Link href={`${links.tag}/${materia}`}>
        <Materia whileHover={{ scale: 1.1 }} materia={materia}>
          <AnimationInView variants={{
            hidden: {
              opacity: 0,
             x: 20
            },
            visible: {
              opacity: 1,
             x: 0
            }
          }}>
            <motion.h2 layoutId={`${materiasJson.object[materia].title}title`}>{children}</motion.h2>
            <ImageContainer layoutId={`${materiasJson.object[materia].title}image`}>
              <Image src={`${links.AssetsbaseURL.icons}${icon}`} layout='responsive' width='100px' height='100px' alt={`${materiasJson.object[materia].title}image`} />
            </ImageContainer>
          </AnimationInView>
        </Materia>
      </Link>
    </>
  );
};

export default OneMateriaComponent;
