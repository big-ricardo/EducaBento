import { motion } from "framer-motion";
import styled from "styled-components";

export const MateriaContainer = styled.div`
  display: flex;
  flex: 1;
  width: 80%;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
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

export const MateriaDiv = styled(motion.div).attrs((props: MateriaInterface) => {
  materia: props.materia;
}) <MateriaInterface>`
  background-color: ${props => props.theme.colors.material[props.materia]}
`;

export const Materia = styled(MateriaDiv)`
  display: flex;
  flex-direction: row-reverse;
  padding: 20px;
  width:80%;
  padding: 50px;
  height: 100%;
  min-height: clamp(300px, 1vh + 22em, 400px);;
  border-radius:60px 40px 25px 10px;
  margin: auto;
  cursor: pointer;

  @media screen and (max-width: 1024px) {
      width:80%;
     flex-direction: column-reverse;
     padding: 30px;
  }
  @media screen and (max-width: 767px){
      width:95%;
  }
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    flex: 1;
    gap: 30px;

    *{
      color: ${props => props.theme.colors.title};
      font-size: clamp(15px,2vw - 10px,24px);
      margin-bottom: 20px;
      text-align:center;
      @media screen and (max-width: 768px) {
      }
    }

    div{
      margin: 0
    }

    h1{
    font-family: 'Philosopher', sans-serif;
    font-weight: bold;
    color: ${props => props.theme.colors.title};
    font-size: clamp(15px,2vw - 6px,33px);
    @media screen and (max-width: 768px) {
      margin-bottom: 10%;
      font-size: clamp(23px,2vh + 4px,36px);
    }
  }

  h2{
    font-family: 'Philosopher', sans-serif;
    font-weight: bold;
    color: ${props => props.theme.colors.title};
    font-size: clamp(15px,2vw - 8px,30px);
     @media screen and (max-width: 768px) {
      margin-bottom: 10%;
      font-size: clamp(20px,2vh + 3px,28px);
    }
  }

  h3{
    font-family: 'Philosopher', sans-serif;
    color: ${props => props.theme.colors.title};
    font-size: clamp(22px,2vw - 5px, 27px);
     @media screen and (max-width: 768px) {
      margin-bottom: 10%;
      font-size: clamp(15px,2vh + 2px,28px);
    }
  }

  h4{
    font-family: 'Philosopher', sans-serif;
    color: ${props => props.theme.colors.title};
    font-size: clamp(15px,2vw - 3px,24px);
     @media screen and (max-width: 768px) {
      margin-bottom: 10%;
      font-size: clamp(15px,2vh + 1px,28px);
    }
  }

  p{
    font-family: 'Philosopher', sans-serif;
    color: ${props => props.theme.colors.text};
   font-size: clamp(17px,2vw - 6px,24px);
     @media screen and (max-width: 768px) {
      margin-bottom: 10%;
      font-size: clamp(17px,2vh,28px);
    }
  }

  img{
    max-width: 80%;
    max-height: 50%;
    @media screen and (max-width: 768px) {
      max-width: 90%;
      max-height: 50%;
    }
  }

  iframe{
    width: clamp(100px, 1vw + 300px,400px);
    height: clamp(50px,1vw + 200px,400px);
  }
`
