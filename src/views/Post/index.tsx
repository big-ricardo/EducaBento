import { motion } from "framer-motion";
import { MateriaContainer, Materia, TextContainer } from './style'
import { Document } from 'prismic-javascript/types/documents';
import Link from "next/link";
import Image from "next/image";
import materias from '../../data/materias.json'
import AnimationInView from '../../components/AnimationInView'
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
        <MateriaContainer>
            <Materia whileHover={{ scale: 1.02 }} materia={post.data.materia}>
              <TextContainer>
                {post.data.body.map((section, ind) => (
                  <div key={ind}>
                    {RichText.render(section.primary.text)}
                  </div>
                ))}
              </TextContainer>
            </Materia>
        </MateriaContainer>
    </>
  );
};

