import { motion } from "framer-motion";
import styled from "styled-components";

export const TeamContainer = styled.div`
  display: flex;
  flex: 1;
  width: 70%;
  padding: 20px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: auto;
  background: linear-gradient(180deg, rgba(134, 243, 237, 0.43) 0%, rgba(255, 255, 255, 0) 100%), rgba(166, 178, 232, 0.52);
  border-radius: 50px;

  @media screen and (max-width: 768px) {
    width:95%;
    flex-direction: column;
  }
`
export const ImageContainer = styled(motion.div)`
  width: 40%;
   @media screen and (max-width: 767px) {
      margin-bottom: 20px;
      width: 55%
    }
`

export const TextContainer = styled.div`
  width: 40%;
  height: 40vh;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: column;

  h1{
    font-family: 'Philosopher', sans-serif;
    color: ${props => props.theme.colors.title};
    font-size: clamp(16px, 3vh + 10px, 34px);
    @media screen and (max-width: 768px) {
      margin-bottom: 10px;
      text-align: center;
      width: 100%
    }
  }

  p{
     font-family: 'Philosopher', sans-serif;
    color: ${props => props.theme.colors.text};
    font-size: clamp(14px, 2vh + 5px , 26px);
  }

   @media screen and (max-width: 768px) {
    height: max-content;
    width: 100%;
  }
`


export const Button = styled(motion.div)`
   width: min-content;
    border-radius: 50px;
    padding: 3% 6%;
    cursor: pointer;
    background-color: ${props => props.theme.colors.secound};
    color: ${props => props.theme.colors.backgroundColor};
    font-family: 'Roboto', sans-serif;
    font-size: clamp(20px, 1vw, 27px);


    &:hover{
      background-color: ${props => props.theme.colors.primary};
    }

    @media screen and (max-width: 768px) {
      text-align: center;
      margin: auto;
      margin-top: 20px;
    }
`
