import { motion } from "framer-motion";
import styled from "styled-components";

export const MateriaContainer = styled.div`
  display: flex;
  flex: 1;
  width: 80%;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: auto;
  gap: 8%;
  transition: 1s;
  @media screen and (max-width: 767px) {
    width:99%;
  }
`

interface MateriaInterface {
  materia: string;
  icon: string;
}

const MateriaDiv = styled(motion.div).attrs((props: MateriaInterface) => {
  materia: props.materia;
  icon: props.icon
}) <MateriaInterface>`
  background-color: ${props => props.theme.colors.material[props.materia]}
`;

export const Materia = styled(MateriaDiv)`
  display: flex;
  flex-direction: row-reverse;
  padding: 40px;
  width:40%;
  max-width:600px;
  height: 40%;
  border-radius:60px 40px 25px 10px;
  margin: auto;
  cursor: pointer;

  @media screen and (max-width: 767px) {
    width:60%;
  }
`

  export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items:flex-start;
    justify-content: space-around;
    flex: 1;
`

  export const ImageContainer = styled.div`
    width: 60%;
    margin-left: -40%;
    max-width: 300px;
  `


