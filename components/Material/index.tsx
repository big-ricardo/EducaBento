import { motion } from "framer-motion";
import { MateriaContainer } from './style'
import Materia from './materia'
import Link from "next/link";

export default function MateriaComponent() {

  return (
    <>
      <MateriaContainer>
        <Materia materia='matematica' icon='/icons/matematica.png'>Matemática</Materia>
      </MateriaContainer>
    </>
  );
};
