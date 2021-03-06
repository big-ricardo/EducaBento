import { motion } from "framer-motion";
import styled from "styled-components";

export const Carrossel = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: 1s;
  height: 85vh;

 @media screen and (max-width: 1024px){
    flex-direction: column-reverse;
     height: 85vh;
  }

`;

export const SectionText = styled(motion.div)`
  width: 35%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  z-index: 10;

    @media screen and (max-width: 1024px){
       align-items: center;
     height: max-content;
     width: 90%;
    }

    @media screen and (max-width: 768px) {
     align-items: center;
     height: max-content;
     width: 90%;
    }

  div h1{
    color: ${props => props.theme.colors.title};
    font-family: 'Philosopher', sans-serif;
    font-weight: 700;
    font-size: clamp(40px, 4vw, 200px);
    @media screen and (max-width: 1024px){
      text-align: center;
      font-size: clamp(22px, 4vh, 200px);
    }
  }

  div h3{
    color: ${props => props.theme.colors.title};
    font-family: 'Philosopher', sans-serif;
    font-size: clamp(25px, 2vw , 200px);
    @media screen and (max-width: 1024px){
      text-align: center;
      font-size: clamp(20px, 3vh + 1px, 200px);
    }
  }

  div p{
    color: ${props => props.theme.colors.title};
    font-family: 'Philosopher', sans-serif;
    font-size: clamp(20px, 1vw + 5px, 25px);
    width: 75%;
    margin-bottom: 5%;
    @media screen and (max-width: 1024px){
      text-align: center;
      font-size: clamp(20px, 3vh - 5px, 200px);
      margin: auto;
      margin-top: 15px;
      margin-bottom: 10px
    }
  }
`
export const H4 = styled(motion.h4)`
    width: min-content;
    border-radius: 50px;
    padding: 3% 6%;
    cursor: pointer;
      z-index: 10;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.backgroundColor};
    font-family: 'Roboto', sans-serif;
    font-size: clamp(20px, 1vw, 27px);


    &:hover{
      background-color: ${props => props.theme.colors.secound};
    }

 @media screen and (max-width: 1024px){
      text-align: center;
      margin: auto
    }
`

export const SectionImg = styled(motion.div)`
  width: 35%;
  z-index: 10;
  @media screen and (max-width: 1024px){
    width: 50%;
  }
`

export const BackgroundGradient = styled.div`

  position: absolute;
  width: 100%;
  height: 80%;

div{
  background: ${props=> 'linear-gradient(270deg,'+ props.theme.colors.primary+ " 0%," + props.theme.colors.secound+', rgba(255, 255, 255, 0) 100%,'+  props.theme.colors.backgroundColor +'), #9C69E2;'};
	background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  transform: skewY(-5deg);
  position: relative;
  width: 47%;
  border-radius: 0 20px 60px 0 ;
  height: 100%;
  z-index: -10;
  opacity: .6;

  @media screen and (max-width: 768px){
    width: 100%;
    opacity: .3;
  }

  @keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
}

`
