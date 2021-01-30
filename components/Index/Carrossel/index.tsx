import * as React from "react";
import { Carrossel, SectionText, SectionImg,H4 } from "./style";
import Image from 'next/image'
import Link from 'next/link'

export default function HeaderComponent() {

  return (
    <>
      <Carrossel>
        <SectionText>
          <div>
            <h1>Educação Bento</h1>
            <h3>Sua plataforma de estudos gratuito</h3>
          </div>
          <div>
            <p>Tudo produzido por alunos voluntarios em busca de ajudar a sua entrada ao mundo universitario</p>
            <Link href='/blog'><H4 whileHover={{transform:"translateX(5px)"}}>COMEÇAR</H4></Link>
          </div>
        </SectionText>
        <SectionImg whileHover={{ scale: 1.1 }}>
          <Image src='/img/carrossel.svg' width='400px' height='400px' layout='responsive' />
        </SectionImg>
      </Carrossel>
    </>
  );
};
