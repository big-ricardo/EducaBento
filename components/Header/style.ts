import { motion } from "framer-motion";
import styled from "styled-components";

export const Header = styled(motion.header)`
  height: 100px;
  @media screen and (max-width: 767px) {
    height: 70px
  }
`;

export const Nav = styled(motion.nav)`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 767px) {
    display: none
  }
`
export const LogoContainer = styled(motion.nav)``

export const LinksContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  width: 50%;
`

export const Link = styled(motion.h5)`
  color: ${props => props.theme.colors.text};
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  margin-right: 5%;
  cursor: pointer;
  font-size: clamp(15px, 1vw, 1vw + 18px )
`

export const LoginContainer = styled(motion.div)`
  width: clamp(40px, 10vw + 60px , 270px);
  height: clamp(40px, 5vh + 10px , 80px);
  background: #FFFFFF;
  box-shadow: 0px 5px 5px rgba(75, 93, 104, 0.1);
  border-radius: 50px;
  display: flex;
  cursor: pointer;
   flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  h2{
    color: ${props => props.theme.colors.text};
    font-family: 'Philosopher', sans-serif;
    margin-right: 14%;
    font-size: clamp(17px, 1vw + 2px, 1vw + 18px )
  }

  svg{
    color: ${props=> props.theme.colors.primary};
    font-size: clamp(16px, 2vw + 5px, 40px);
    margin-right: 9%;
  }
`
