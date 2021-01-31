import { motion } from "framer-motion";
import { MateriaContainer, Materia, ImageContainer, TextContainer } from './style'
import Link from "next/link";
import Image from "next/image";
import materias from '../../utils/materias.json'
import AnimationInView from '../AnimationInView'

interface MateriaInterface {
  materia: string;
}

const MateriaComponent: React.FC<MateriaInterface> = ({ materia, children }) => {
  return (
    <>
      <MateriaContainer>
        <Link href={`/post/${materia}`}>
          <Materia whileHover={{ scale: 1.1 }} materia={materia}>
            <TextContainer>
              <h2>ansodasd asoidnioasnda sodinasido</h2>
            </TextContainer>

            <ImageContainer>
              <Image src={`/icons${materias.object[materia].icon}`} layout='responsive' width='100px' height='100px' />
            </ImageContainer>

          </Materia>
        </Link>
        <Link href={`/post/${materia}`}>
          <Materia whileHover={{ scale: 1.1 }} materia={materia}>
            <TextContainer>
              <h2>Probabilidade</h2>
              <h4>O sistema ABO classifica grupos sanguíneos em tipos A, B, AB e O. Esse sistema foi descrito em 1900 por Karl Landsteiner, que, inicialmente, descreveu os grupos A, B e O</h4>
              <h3>Veja Aqui</h3>
            </TextContainer>

            <ImageContainer>
              <Image src={`/icons${materias.object[materia].icon}`} layout='responsive' width='100px' height='100px' />
            </ImageContainer>

          </Materia>
        </Link>
      </MateriaContainer>
    </>
  );
};

export default MateriaComponent;
