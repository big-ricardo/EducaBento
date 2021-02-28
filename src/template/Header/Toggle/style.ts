import { motion } from "framer-motion";
import styled from "styled-components";
import LinkNext from "next/link";

export const Nav = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 50%;
  min-width: 230px;
  z-index: 2500;
  background: linear-gradient(180deg, ${props=> props.theme.colors.backgroundColor} 0%, rgba(255, 255, 255, 1) 40%);
  display: none;
  border: 1px solid rgba(0,0,0,0.5);
    @media screen and (max-width: 767px){
    display: flex
  }
`;

export const Link = styled(LinkNext)`
  color: ${props => props.theme.colors.text};
  font-family: 'Roboto', sans-serif;
  margin-bottom: 1.6rem;
  font-size: 1.4rem;
`;

export const ButtonToggle = styled.button`
  outline: none;
  border: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  cursor: pointer;
  position: absolute;
  top: 18px;
  left: 15px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: transparent;
`

export const SvgBox = styled(motion.div)``;

export const Li = styled(motion.div)`
  list-style: none;
  width: 60%;
  color: ${props=> props.theme.colors.title};
  text-decoration: none;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px dotted currentColor;
  display: flex;
  padding-left: 5%;

  a{
    margin: auto;
    text-decoration: none;
  }

`
export const Ul = styled(motion.div)`
  padding: 25px;
  position: absolute;
  top: 100px;
  width: 50%;
  min-width: 230px;
   margin: 0;
  padding: 0;
   display: flex;
  flex: 1;
  align-items:center;
  justify-content: center;
  flex-direction: column;
`
