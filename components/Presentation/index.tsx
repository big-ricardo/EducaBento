import * as React from "react";
import { Presentation , SectionText, SectionImg, Divider } from "./style";
import Image from 'next/image'
import Link from 'next/link'

export default function PresentationComponent() {

  return (
    <>
      <Presentation>
        <SectionText>
          <div>
            <h1>Blog</h1>
            <h3>Sua plataforma de estudos gratuito</h3>
          </div>
        </SectionText>
        <SectionImg whileHover={{ scale: 1.1 }}>
          <Image src='/img/blog.svg' width='400px' height='400px' layout='responsive' />
        </SectionImg>
      </Presentation >
      <Divider/>
    </>
  );
};
