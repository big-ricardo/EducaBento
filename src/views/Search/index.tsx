import React, { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { MdSearch } from 'react-icons/md';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip'
import Router from 'next/router'

import Materia, { post } from "@/src/components/Materia";
import Members from "@/src/components/Members";

import Prismic from '@prismicio/client'
import { Document } from 'prismic-javascript/types/documents';
import { RichText } from 'prismic-reactjs';

import links from '@/src/data/links.json'
import materias from '@/src/data/materias.json'
import Image from 'next/image';
import Link from 'next/link';

import { Container } from "./style"

export default function SearchComponent({ posts, members, q }) {


  useEffect(() => {
    console.log(posts);
    console.log(members);

  }, [])

  return (
    <>

      <h1 className='title'>Membros</h1>
      <Members members={members}/>

      <h1 className='title'>Publicações</h1>
      <Materia posts={posts} />
    </>
  );
}
