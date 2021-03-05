import * as React from "react";
import { useRef } from "react";
import { useCycle, AnimatePresence } from "framer-motion";
import { Header, Nav, LinksContainer, Link, LogoContainer, LoginContainer, SearchContainer } from './style'
import NavToggle from './Toggle'
import AutoComplete from '@/src/components/AutoComplete'
import LinkNext from "next/link";
import { BsArrowRight } from 'react-icons/bs'
import links from '@/src/data/links.json'

const Links = [{ title: "Inicio", slug: links.home }, { title: "Sobre", slug: links.about }, { title: "Blog", slug: links.blog }]

export default function HeaderComponent() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  return (
    <AnimatePresence initial={false}>
      <Header
        initial={false}
        animate={isOpen ? "open" : "closed"}
        exit={{opacity:0}}
        ref={containerRef}
      >
        <Nav>
          <LogoContainer>
            <h2>Logo</h2>
          </LogoContainer>
          <LinksContainer>
            {Links.map(link => (
              <LinkNext href={link.slug} key={link.slug}>
                <Link whileHover={{ transform: "translateX(5px)" }}>{link.title}</Link>
              </LinkNext>
            ))}
          </LinksContainer>
          <SearchContainer>
            <AutoComplete />
          </SearchContainer>
          <LinkNext href={links.maintenance}>
            <LoginContainer whileHover={{ transform: 'translateX(5px)' }}>
              <h2>Entrar</h2>
              <BsArrowRight />
            </LoginContainer>
          </LinkNext>
        </Nav>
        <NavToggle links={Links} toggleOpen={toggleOpen} />
      </Header>
    </AnimatePresence>
  );
};

