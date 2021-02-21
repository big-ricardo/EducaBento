import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {MdSearch} from 'react-icons/md';
import CircularProgress from '@material-ui/core/CircularProgress';
import { apiEndpoint } from '@/src/config/prismic_configuration'

import Prismic from '@prismicio/client'
import { Document } from 'prismic-javascript/types/documents';
import { RichText } from 'prismic-reactjs';

import links from '../../../data/links.json'
import materias from '../../../data/materias.json'
import Image from 'next/image';

import {Grid} from "./style"

interface CountryType {
  name: string;
}

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export default function Asynchronous() {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [options, setOptions] = React.useState<Document[] | null>(null);
  const loading = open && !options && search !== "" ;


  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions(null);
      setSearch("")
    }
  }, [open]);

  React.useMemo(() => {
    if (search != "") {
      setOptions(null)
      HandleSearch()
    }
  }, [search])


  async function HandleSearch() {
    const client = Prismic.client(process.env.PRISMIC_URL, { accessToken: process.env.PRISMIC_TOKEN })
    console.log(search);
    const response = await client.query([
      Prismic.Predicates.at('document.type', 'blog_posts'),
      Prismic.Predicates.fulltext('document', search)
    ], { orderings: '[my.blog-post.date desc]', pageSize: 10 })
    if (response) {
      if(response.total_results_size === 0){
        setOptions([])
      }else{
        setOptions(response.results)
      }
    }
  }

  return (
    <Autocomplete
      id="asynchronous-demo"
      style={{ width: 300 }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      getOptionSelected={(option, value) => RichText.asText(option.data.title) === RichText.asText(value.data.title)}
      getOptionLabel={(option) => RichText.asText(option.data.title)}
      options={options || []}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Pesquisar"
          value={search}
          onChange={e => { setSearch(e.target.value) }}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : <MdSearch color="inherit" size={20} />}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
      renderOption={(option) => {

        return (<>
            <Grid container  alignItems="center" justify-content="center"  materia={option.data.materia}>
             <Grid item  alignItems="center" style={{marginLeft: "10%"}}>
              <Image src={`${links.AssetsbaseURL.icons}${materias.object[option.data.materia].icon}`} layout='fixed' width='50px' height='50px' />
            </Grid>
            <Grid item xs  alignItems="center">
              <h3>
                {RichText.asText(option.data.title)}
              </h3>
            </Grid>
          </Grid>
        </>)
      }}
    />
  );
}
