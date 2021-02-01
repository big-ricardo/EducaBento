import { motion } from "framer-motion";
import { MateriaContainer, Materia, ImageContainer, TextContainer } from './style'
import Link from "next/link";
import Image from "next/image";
import materias from '../../utils/materias.json'
import AnimationInView from '../AnimationInView'
import { BsArrowRight } from 'react-icons/bs'

export interface post {
    materia: string;
    title: string;
    slug: string;
    description: string;
  };

interface MateriaInterface {
  post: post
}

const MateriaComponent: React.FC<MateriaInterface> = ({ post }) => {

  if(!post){
    return <></>;
  }

  return (
    <>
      <AnimationInView>
        <MateriaContainer>
          <Link href={`/post/${post.slug}`}>
            <Materia whileHover={{ scale: 1.1 }} materia={post.materia}>
              <TextContainer>
                <h2>{post.title}</h2>
                <h4>{post.description}</h4>
                <h3>Veja Aqui  <BsArrowRight /> </h3>
              </TextContainer>

              <ImageContainer>
                <Image src={`/icons${materias.object[post.materia].icon}`} layout='responsive' width='100px' height='100px' />
              </ImageContainer>

            </Materia>
          </Link>
        </MateriaContainer>
      </AnimationInView>
    </>
  );
};

export default MateriaComponent;
