import { motion } from "framer-motion";
import { MateriaContainer, Materia, ImageContainer, TextContainer } from './style'
import Link from "next/link";
import Image from "next/image";
import materias from '../../data/materias.json'
import links from '../../data/links.json'
import AnimationInView from '../AnimationInView'
import { BsArrowRight } from 'react-icons/bs'
import { PostInterface } from "@/src/interfaces/Post";

interface MateriaInterface {
  posts: PostInterface[]
}

const MateriaComponent: React.FC<MateriaInterface> = ({ posts }) => {

  if (!posts) {
    return <></>;
  }

  return (
    <>
      <AnimationInView>
        <MateriaContainer>
          {posts.map(post => (
            <Link href={`${links.post}/${post.slug}`} key={post.slug}>
              <Materia whileHover={{ scale: 1.1 }} materia={post.materia}>
                <TextContainer>
                  <motion.h2  layoutId={`${post.title}title`}>{post.title}</motion.h2>
                  <h4>{post.description}</h4>
                  <h3>Veja Aqui  <BsArrowRight /> </h3>
                </TextContainer>

                <ImageContainer layoutId={`${post.title}image`}>
                  <Image src={`${links.AssetsbaseURL.icons}${materias.object[post.materia].icon}`} layout='responsive' width='100px' height='100px' />
                </ImageContainer>

              </Materia>
            </Link>
          ))}
        </MateriaContainer>
      </AnimationInView>
    </>
  );
};

export default MateriaComponent;
