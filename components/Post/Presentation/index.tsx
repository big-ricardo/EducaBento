import * as React from "react";
import { Presentation, SectionText, SectionImg, Divider } from "./style";
import Image from 'next/image'
import Link from 'next/link'

interface PresentationProps {
  image: string,
  title: string,
  description: string,
  date: string
}

export default function PresentationComponent({ image, title, description, date }: PresentationProps) {

  return (
    <>
      <Presentation>
        <SectionText>
          <div>
            <h1>{title}</h1>
            <p>{date}</p>
            <h3>{description}</h3>
          </div>
        </SectionText>
        <SectionImg whileHover={{ scale: 1.1 }}>
          <Image src={image} width='400px' height='400px' layout='responsive' />
        </SectionImg>
      </Presentation >
      <Divider />
    </>
  );
};
