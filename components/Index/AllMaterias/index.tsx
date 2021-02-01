import { motion } from "framer-motion";
import { MateriaContainer } from './style'
import Materia from './materia'
import Link from "next/link";
import materias from '../../../utils/materias.json'
import AnimationInView from '../../AnimationInView'

export default function MateriaComponent() {

  return (
    <>
      <AnimationInView>
         <h1 className='title'>Matérias</h1>
        </AnimationInView>
      <MateriaContainer>
        {materias.array.map((materia, i) => (

            <Materia materia={materia.slug} key={i} icon={materia.icon}>{materia.title}</Materia>

        ))}
      </MateriaContainer>
    </>
  );
};
