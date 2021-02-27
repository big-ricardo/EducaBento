import React, { useEffect, useState } from "react";
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
  transition?: {
    duration: number
  },
  children

}

const FadeInWhenVisible: React.FunctionComponent<VariantProps> = ({ children,
  variants = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0 }
  },
  transition = { duration: 1 }
}: VariantProps) => {

  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [width, setWidth] = useState(599)

  useEffect(()=>{
    if(window){
      setWidth(window.screen.width)
    }
  },[])

  useEffect(() => {
    if (inView && window.screen.width > 600) {
      controls.start("visible");
    }
  }, [inView]);

  return (
    <>
      {width > 600 ? (
        <motion.div
          ref={ref}
          animate={controls}
          initial='hidden'

          transition={transition}
          variants={variants}
        >
          {children}
        </motion.div>
      ):(
        <>{children}</>
      )}
    </>
  );
}

export default FadeInWhenVisible
