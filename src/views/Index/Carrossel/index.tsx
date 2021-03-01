import * as React from "react";
import { Carrossel, SectionText, SectionImg,H4 } from "./style";
import Image from 'next/image'
import Link from 'next/link'
import links from '../../../data/links.json'
import SVGCarrossel from '../../../assets/img/carrossel.svg'

export default function CarrosselView() {

  return (
    <>
      <Carrossel initial={{opacity: 0, y: -50}} animate={{opacity: 1, y:0}}>
        <SectionText>
          <div>
            <h1>Educação Bento</h1>
            <h3>Sua plataforma de estudos gratuito</h3>
          </div>
          <div>
            <p>Tudo produzido por alunos voluntarios em busca de ajudar a sua entrada ao mundo universitario</p>
            <Link href={links.blog}><H4 whileHover={{transform:"translateX(5px)"}}>COMEÇAR</H4></Link>
          </div>
        </SectionText>
        <SectionImg whileHover={{ scale: 1.1 }}>
          <SVGCarrossel />
        </SectionImg>
      </Carrossel>
    </>
  );
};
