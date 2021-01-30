import { motion } from "framer-motion";
import { Link, Ul, Li } from './style'

import * as React from "react";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    display: 'flex',
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1, delay: 0.8 },
    display: 'none',
  }
};

export default function NavigationToggle({ links }) {

  return (
    <Ul variants={variants}>
      {links.map(i => (
        <MenuItem i={i} key={i} />
      ))}
    </Ul>
  );
}

const variantsMenu = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

const MenuItem = ({ i }) => {
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <Li
      variants={variantsMenu}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href='#'>{i}</Link>
    </Li>
  );
};
