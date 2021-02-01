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
  @media screen and (max-width: 768px) {
    width:99%;
  }
`

interface MateriaInterface {
  materia: string;
  icon: string;
}

const MateriaDiv = styled(motion.div).attrs((props: MateriaInterface) => {
  materia: props.materia;
}) <MateriaInterface>`
  background-color: ${props => props.theme.colors.material[props.materia]}
`;

export const Materia = styled(MateriaDiv)`
  display: flex;
  flex-direction: row-reverse;
  padding: 20px;
  width:40%;
  max-width:600px;
  height: 100%;
  min-height: clamp(300px, 1vh + 22em, 400px);;
  border-radius:60px 40px 25px 10px;
  margin: auto;
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    width:80%;
     flex-direction: column-reverse;
     padding: 30px;
      margin-bottom: 10%;
      &:first-child{
       margin-top: 10%
     }
  }
  @media screen and (max-width: 767px){
     margin-bottom: 20%;
      &:first-child{
       margin-top: 20%
     }
  }
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items:flex-start;
    justify-content: space-around;
    flex: 1;
    margin-left: 20px;

  h2{
    font-family: 'Philosopher', sans-serif;
    font-weight: bold;
    color: ${props => props.theme.colors.title};
    font-size: clamp(26px,2vw + 3px,33px);
     @media screen and (max-width: 768px) {
      margin-bottom: 10%;
      font-size: clamp(20px,2vh + 6px,28px);
    }
  }
  h4{
    font-family: 'Philosopher', sans-serif;
    color: ${props => props.theme.colors.text};
    font-size: clamp(17px,1vw,28px);
    line-height:  180%;
     @media screen and (max-width: 768px) {
      margin-bottom: 10%;
      font-size: clamp(15px,2vh,28px);
    }
  }

  h3{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-family: 'Roboto', sans-serif;
    color: ${props => props.theme.colors.title};
    font-size: clamp(20px,1vw + 2px,30px);

     @media screen and (max-width: 768px) {
      font-size: clamp(15px,2vh + 2px,30px);
      margin: auto;
    }

     svg{
      color: ${props => props.theme.colors.primary};
      font-size: clamp(14px,1vw + 18px,40px);
      margin-left: 3vh;
  }
  }

`

export const ImageContainer = styled.div`
    width: 50%;
    margin: auto;
    margin-left: -25%;
    max-width: 300px;
     @media screen and (max-width: 1024px) {
      margin: auto;
       width: 40%;
    }
    @media screen and (max-width: 767px) {
      margin: auto;
      width: 60%;
      margin-top: -40%;
      margin-bottom: 10px;
    }
  `


