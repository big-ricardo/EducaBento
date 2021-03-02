import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

interface VariantProps {
  variants?: {
    visible: object ,
    hidden:  object
  },
  transition?: {
    duration: number
  },
  children,
  style?: React.CSSProperties
}

const FadeInWhenVisible: React.FunctionComponent<VariantProps> = ({ children,
  variants = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0 }
  },
  transition = { duration: 1 },
  ...props
}: VariantProps) => {

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView]);

  return (
    <>
      <motion.div
        ref={ref}
        animate={controls}
        initial='hidden'
        transition={transition}
        variants={variants}
        {...props}
      >
        {children}
      </motion.div>
    </>
  );
}

export default FadeInWhenVisible
