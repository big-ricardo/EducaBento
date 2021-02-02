import * as React from "react";
import { FooterContainer, FooterDiv, H2 } from "./style";
import Image from 'next/image'
import Link from 'next/link'

export default function HeaderComponent() {

  return (
    <>
      <FooterContainer>
        <FooterDiv>
          <h1>Educação Bento</h1>
          <h3 style={{marginBottom: 0}}>Contatos</h3>
          <h4>educacaobento@gmail.com</h4>
        </FooterDiv>
        <FooterDiv>
          <h3>Sobre</h3>
          <Link href='/'><h4>Inicio</h4></Link>
          <Link href='/'><h4>Sobre</h4></Link>
          <Link href='/'><h4>Blog</h4></Link>
        </FooterDiv>
        <FooterDiv>
          <h3>Ajuda</h3>
          <Link href='/'><h4>Suporte</h4></Link>
        </FooterDiv>
        <FooterDiv>
          <h3 style={{marginBottom: 5}}>Nos siga nas redes:</h3>
          <Link href='/'><h4>Suporte</h4></Link>
        </FooterDiv>
      </FooterContainer>
      <H2>Copyright &copy; {new Date().getFullYear()} , todos os direitos reservados Educação Bento - Site Desenvolvido por <a href='https://luiss1569.github.io/luiss1569.github.io' target='_blank' rel="noreferrer">Luis Ricardo</a></H2>
    </>
  );
};
