import { motion } from "framer-motion";
import styled from "styled-components";

export const FooterContainer = styled(motion.div)`
  display: flex;
  width: 80%;
  margin: auto;
  padding: 50px;
  margin-top: 150px;
  height: 40vh;
  flex-direction: row;
  justify-content: space-between;
  align-content: space-between ;
  border-top: 2px dotted currentColor;

   @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: 100px;
    height: max-content;
    width: 100%;
  }
`

export const Container = styled.div`
   background: linear-gradient(0deg, #b7dfe7 19%, #fff);
`


export const FooterDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 50%;

    h1{
      margin-bottom: 10vh;
      color: ${props=>props.theme.colors.title};
      font-size: clamp(20px, 3vh + 7px, 40px);
      font-weight: bold;
      font-family: 'Philosopher', sans-serif;
      @media screen and (max-width: 768px) {
        font-size: clamp(26px, 3vh, 40px);
        margin-bottom: 15px;
      }
    }
    h3{
      margin-bottom: 5vh;
       color: ${props=>props.theme.colors.title};
      font-size: clamp(16px, 2vh + 1px, 26px);
      font-family: 'Philosopher', sans-serif;
      font-weight: bold;
      text-shadow: 0 0 black;
       @media screen and (max-width: 768px) {
        margin-bottom: 18px;
        font-size: clamp(14px, 2vh + 5px, 40px);
      }
    }

    h4{
      margin-bottom: 20px;
      font-size: clamp(13px, 2vh, 21px);
      font-family: "Roboto",  sans-serif;
       color: ${props=>props.theme.colors.text};
      font-weight:400;
      cursor: pointer;
       @media screen and (max-width: 768px) {
        margin-bottom: 15px;
        font-size: clamp(12px, 2vh, 40px);
      }
    }

   @media screen and (max-width: 768px) {
    width: 95%;
      max-width: 100%
  }
`;

export const H2 = styled.h2`
  width: 100%;
  margin: 0 auto;
  padding-bottom: 75px;
  text-align: center;
  color: ${props=>props.theme.colors.text};
  font-size: clamp(14px, 2vh + 1px, 24px);
  font-family: 'Philosopher', sans-serif;
  @media screen and (max-width: 768px) {
    padding-bottom: 50px;
    font-size: clamp(10px, 2vh, 40px);
    margin-top: 10px;
  }
`

