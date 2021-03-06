import { motion } from "framer-motion";
import styled from "styled-components";

export const Presentation = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content:center;
  align-items: center;
  width: 80%;
   margin: auto;
  gap: 10%;

   @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
     width: 90%;
  }
`;


export const SectionImg = styled(motion.div)`
  width: 20%;
  height: 20%;
   @media screen and (max-width: 768px) {
    width: 50%;
     height: 35%;
  }
`

export const Divider = styled.div`
  border:1px solid ${props => props.theme.colors.primary};
  margin: auto;
  margin-bottom: 50px;
  margin-top: 5px;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  width: 80%;
`

export const H1 = styled(motion.h1)`

    color: ${props => props.theme.colors.title};
    font-family: 'Philosopher', sans-serif;
    font-weight: 700;
    font-size: clamp(40px, 4vw, 200px);
    margin-bottom: 5px;
    @media screen and (max-width: 768px) {
     text-align: center;
    }
`

export const SectionText = styled(motion.div)`
  height: 25vh;
  display: flex;
  min-width: 60%;
  flex-direction: column;
  margin-top: 5%;
  justify-content: space-around;
  align-items: flex-start;

    @media screen and (max-width: 1024px){
      height: 15vh;
    }

  @media screen and (max-width: 768px) {
     align-items: center;
     height: max-content;
     width: 90%;
     margin-bottom: 10px
  }
  }

  div h3{
    color: ${props => props.theme.colors.title};
    font-family: 'Philosopher', sans-serif;
    font-size: clamp(15px,2vw - 10px,24px);
     @media screen and (max-width: 768px) {
    text-align: center;
      font-size: clamp(15px,2vh,28px);
    }
  }

  div p{
    color: ${props => props.theme.colors.title};
    font-family: 'Philosopher', sans-serif;
    font-size: clamp(15px,2vw - 10px,24px);
    opacity: 0.9;
    margin-bottom: 10px;
    @media screen and (max-width: 768px) {
      text-align: center;
      font-size: clamp(15px,2vh,28px);
    }
`

