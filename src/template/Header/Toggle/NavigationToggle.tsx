import { motion } from "framer-motion";
import { Link, Ul, Li } from './style'
import { AiOutlineHome, AiOutlineFileText } from 'react-icons/ai'
import { BiBookContent } from 'react-icons/bi'
import { MdSearch } from 'react-icons/md';

import * as React from "react";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    display: 'flex',
    overflow: 'hidden'
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1, delay: 0.8 },
    display: 'none',
  }
};

export default function NavigationToggle({ links }) {

  return (
    <Ul variants={variants}>
      {links.map((i, index) => (
        <MenuItem i={i} key={index} index={index} />
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


const icons = [<AiOutlineHome fontSize='1.8em' />, <BiBookContent fontSize='1.8em' />
              ,<AiOutlineFileText fontSize='1.6em' />, <MdSearch fontSize='1.6em' />];

const MenuItem = ({ i, index }) => {
  return (
    <Li
      variants={variantsMenu}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href={i.slug}>
        <div>
          {icons[index]}
          {i.title}
        </div>
      </Link>
    </Li>
  );
};
