import React, { useEffect, ReactChildren } from "react";
import ReactDOM from "react-dom";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

interface VariantProps {
 variants?: {
    visible: {
    scale?: number,
    transform?: string,
    opacity?: number
  },
  hidden: {
    scale?: number,
    transform?: string,
    opacity?: number
  }
 },
 transition?:{
   duration: number
 },
 children

}

const FadeInWhenVisible: React.FunctionComponent<VariantProps> =({ children,
  variants = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0}
  },
  transition = { duration: 1 }
}: VariantProps) => {

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={transition}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

export default FadeInWhenVisible
