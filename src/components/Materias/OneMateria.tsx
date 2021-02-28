import { motion } from "framer-motion";
import styled from "styled-components";
import { MateriaContainer, TextContainer, MateriaDiv } from './style'
import Link from "next/link";
import links from '../../data/links.json'
import Image from "next/image";
import materias from '../../data/materias.json'
import AnimationInView from '../AnimationInView'
import { BsArrowRight } from 'react-icons/bs'
import { PostInterface } from "@/src/interfaces/Post";

interface MateriaInterface {
  post: PostInterface
}

const OneMateriaComponent: React.FC<MateriaInterface> = ({ post }) => {

  if (!post) {
    return <>Sem Posts</>;
  }

  return (
    <>
      <AnimationInView>
        <MateriaContainer>
          <Link href={`${links.post}/${post.slug}`}>
            <Materia whileHover={{ scale: 1.1 }} materia={post.materia}>
              <TextContainer>
                <motion.h2 layoutId={`${post.title}title`} style={{ marginBottom: 20 }}>{post.title}</motion.h2>
                <H4 layoutId={`${post.title}body`}>{post.description}</H4>
                <h3>Veja Completo  <BsArrowRight /> </h3>
              </TextContainer>
            </Materia>
          </Link>
        </MateriaContainer>
      </AnimationInView>
    </>
  );
};

export default OneMateriaComponent;


const Materia = styled(MateriaDiv)`
  display: flex;
  flex-direction: row-reverse;
  padding: 20px;
  width:80%;
  align-items: center;
  justify-content: center;
  min-height: clamp(300px, 1vh + 22em, 400px);;
  border-radius:60px 40px 25px 10px;
  margin: auto;
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    width:80%;
     flex-direction: column-reverse;
     padding: 30px;
      margin-bottom: 50px;
  }
  @media screen and (max-width: 767px){
     margin-bottom: 30px
  }
`

const H4 = styled(motion.h6)`
   font-family: 'Philosopher', sans-serif;
    color: ${props => props.theme.colors.text};
    font-size: clamp(14px,2vw - 5px,25px);
    margin-bottom: 20px;
     @media screen and (max-width: 1024px) {
      margin-bottom: 10%;
      font-size: clamp(15px,2vh - 3px,28px);
    }
`
