import { motion } from "framer-motion";
import styled from "styled-components";

export const Carrossel = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: 1s;
  margin-top: 3%;

   @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

