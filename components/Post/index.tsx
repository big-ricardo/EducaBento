import { motion } from "framer-motion";
import { MateriaContainer, Materia, TextContainer } from './style'
import { Document } from 'prismic-javascript/types/documents';
import Link from "next/link";
import Image from "next/image";
import materias from '../../utils/materias.json'
import AnimationInView from '../AnimationInView'
import { BsArrowRight } from 'react-icons/bs'

import { RichText } from 'prismic-reactjs';

interface PropTypes {
  post: Document;
}


export default function MateriaComponent({ post }:PropTypes){

  if (!post) {
    return <></>;
  }

  return (
    <>
      <AnimationInView>
        <MateriaContainer>
            <Materia whileHover={{ scale: 1.02 }} materia={RichText.asText(post.data.materia)}>
              <TextContainer>
                {post.data.body.map((section, ind) => (
                  <div key={ind}>
                    {RichText.render(section.primary.text)}
                  </div>
                ))}
              </TextContainer>
            </Materia>
        </MateriaContainer>
      </AnimationInView>
    </>
  );
};

