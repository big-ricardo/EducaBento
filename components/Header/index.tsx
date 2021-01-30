import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { Header, Nav, LinksContainer, Link, LogoContainer, LoginContainer } from './style'
import NavToggle from './Toggle'
import LinkNext from "next/link";
import { BsArrowRight } from 'react-icons/bs'

const Links = [{ title: "Inicio", slug: '/' }, {title:"Sobre", slug: '/about'},  {title:"Blog", slug: '/blog'}]

export default function HeaderComponent() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  return (
    <Header
      initial={false}
      animate={isOpen ? "open" : "closed"}
      ref={containerRef}
    >
      <Nav>
        <LogoContainer>
          <h2>Logo</h2>
        </LogoContainer>
        <LinksContainer>
          {Links.map(link => (
            <LinkNext href={link.slug} key={link.slug}>
              <Link whileHover={{transform:"translateX(5px)" }}>{link.title}</Link>
            </LinkNext>
          ))}
        </LinksContainer>
        <LinkNext href='#'>
          <LoginContainer whileHover={{ transform: 'translateX(5px)' }}>
            <h2>Entrar</h2>
            <BsArrowRight />
          </LoginContainer>
        </LinkNext>
      </Nav>
      <NavToggle links={Links} toggleOpen={toggleOpen} />
    </Header>
  );
};
