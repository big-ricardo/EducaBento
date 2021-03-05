import React, { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { MdSearch } from 'react-icons/md';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip'
import Router from 'next/router'

import Materia from "@/src/components/Materias";
import Members from "@/src/components/Members";

import Prismic from '@prismicio/client'
import { Document } from 'prismic-javascript/types/documents';
import { RichText } from 'prismic-reactjs';

import links from '@/src/data/links.json'
import materias from '@/src/data/materias.json'
import Image from 'next/image';
import Link from 'next/link';

import AutoComplete from '@/src/components/AutoComplete'

import { MdExpandMore } from "react-icons/md";

import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';

import { Container, Accordion } from "./style"

export default function SearchComponent({ posts, members, q }) {

  return (
    <>

      <Container>
        <AutoComplete />
      </Container>

      {q && (
        <>
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<MdExpandMore />}
            >
              <h1>Membros</h1>
            </AccordionSummary>
            <AccordionDetails >
              <Members members={members} />
            </AccordionDetails>
          </Accordion>

          <Accordion defaultExpanded>
            <AccordionSummary
            >
              <h1>Publicações</h1>
            </AccordionSummary>
          </Accordion>
          <br /><br />
          <Materia posts={posts} />
        </>
      )}
    </>
  );
}
