import { motion } from "framer-motion";
import styled from "styled-components";

export const TeamContainer = styled.div`
  padding: 20px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 70%;
  margin: auto;
  margin-top: 100px;
  background: linear-gradient(270deg, #B8C7FF 0%, rgba(255, 255, 255, 0) 100%), #9C69E2;;
  border-radius: 50px;

  h1{
    margin: auto;
    font-family: 'Philosopher', sans-serif;
    margin-top: 60px;
    margin-bottom: 40px;
    width: 80%;
    color: ${props => props.theme.colors.backgroundColor}
  }

  @media screen and (max-width: 768px) {
    width:95%;
    flex-direction: column;
    margin-top: 50px;
  }
`

export const CarrosselContainer = styled.div`

`

export const CarrosselItems = styled.div`
  display: flex !important;
  justify-content: center;
  width: 80% !important;
  padding: 10px 50px;
  min-height: 40vh;
  align-items: center;
  margin: auto;
  flex-direction: row;
  background: #FFFFFF;
  box-shadow: 0px 20px 0px rgba(156, 105, 226, 0.3);
  border-radius: 20px;
  margin-bottom: 50px;

  @media screen and (max-width: 768px) {
    width:95% !important;
    flex-direction: column;
  }

  div.image{
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    @media screen and (max-width: 768px) {
      margin-bottom: 20px
    }
  }

   div.texts{
    margin-left: 5%;
    h2{
      font-family: 'Philosopher', sans-serif ;
      color: ${props => props.theme.colors.title};
      margin-bottom: 0;
      font-size: clamp(16px, 3vh + 5px, 34px);
      font-weight: bold;
      cursor: pointer;
    }
    span{
      font-family: 'Roboto', sans-serif;
      color: ${props => props.theme.colors.text};
      margin-bottom: 20px;
      font-size: clamp(12px, 2vh + 1px , 26px);
    }
    h4{
      font-family: 'Philosopher', sans-serif;
      color: ${props => props.theme.colors.title};
      font-size: clamp(14px, 2vh + 4px , 26px);

      @media screen and (max-width: 768px) {
        max-height: 150px;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
`
