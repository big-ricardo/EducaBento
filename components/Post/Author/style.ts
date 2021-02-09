import { motion } from "framer-motion";
import styled from "styled-components";

export const CarrosselItems = styled.div`
  display: flex !important;
  justify-content: center;
  width: 50% !important;
  padding: 10px 50px;
  align-items: center;
  margin: auto;
  flex-direction: column;
  border-radius: 20px;
  margin-top: -40px;

  @media screen and (max-width: 768px) {
    width:95% !important;
    flex-direction: column;
  }

  div.image{
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 20px;
    @media screen and (max-width: 768px) {
      margin-bottom: 20px
    }
  }

   div.texts{

    h2{
      font-family: 'Philosopher', sans-serif ;
      color: ${props=> props.theme.colors.title};
      margin-bottom: 5px;
      text-align: center;
      font-size: clamp(16px, 3vh + 5px, 34px);
      font-weight: bold;
      cursor: pointer;
    }
    h3{
      font-family: 'Roboto', sans-serif;
      color: ${props=> props.theme.colors.text};
      text-align: center;
      margin-bottom: 10px;
      color: ${props=> props.theme.colors.text};
      font-size: clamp(14px, 2vh + 4px , 26px);
    }
    h4{
      font-family: 'Philosopher', sans-serif;
       text-align: center;
      color: ${props=> props.theme.colors.title};
       font-size: clamp(14px, 2vh + 4px , 26px);
    }
  }
`
