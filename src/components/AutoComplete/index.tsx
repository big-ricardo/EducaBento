import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { MdSearch } from 'react-icons/md';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip'
import Router from 'next/router'

import Prismic from '@prismicio/client'
import { Document } from 'prismic-javascript/types/documents';
import { RichText } from 'prismic-reactjs';

import links from '../../data/links.json'
import materias from '../../data/materias.json'
import Image from 'next/image';
import Link from 'next/link';

import { Grid } from "./style"

export default function Asynchronous() {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState<string | null>("");
  const [options, setOptions] = React.useState<Document[] | null>(null);
  const loading = open && !options && search !== "";


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

    const response = await client.query([
      Prismic.Predicates.at('document.type', 'blog_posts'),
      Prismic.Predicates.fulltext('document', search)
    ], { orderings: '[my.blog-post.date desc]', pageSize: 10 }).catch(() => {
      setOptions([])
    })
    if (response) {
      if (response.total_results_size === 0) {
        setOptions([])
      } else {
        setOptions(response.results)
      }
    }
  }

  return (
    <Autocomplete
      id="asynchronous-demo"
      style={{ width: 250 }}
      open={open}
      freeSolo
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      size='small'
      getOptionSelected={(option, value) => option.uid === value.uid}
      getOptionLabel={(option) => option.uid}
      options={options || []}
      loading={loading}
      loadingText="Carregando..."
      noOptionsText="Nada...digite a palavra inteira"
      renderInput={(params) => (
        <form onSubmit={e => {
          e.preventDefault()
          Router.push(`${links.search}?q=${search}`)
        }}>
          <TextField
            {...params}
            label="Pesquisar"
            size="small"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {loading ? <CircularProgress color="inherit" size={20} /> : <IconButton type='submit' size='small'><MdSearch color="inherit" size={20} /></IconButton>}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
          />
        </form>
      )}
      renderOption={(option) => {

        return (<>
          <Link href={`${links.post}/${option.uid}`}>
            <Tooltip title={RichText.asText(option.data.description)}>
              <Grid container alignItems="center" justify-content="center" materia={option.data.materia}>
                <Grid item alignItems="center" style={{ marginLeft: "5%" }}>
                  <Image src={`${links.AssetsbaseURL.icons}${materias.object[option.data.materia].icon}`} layout='fixed' width='50px' height='50px' />
                </Grid>
                <Grid item xs alignItems="center">
                  <h5>
                    {RichText.asText(option.data.title)}
                  </h5>
                </Grid>
              </Grid>
            </Tooltip>
          </Link>

        </>)
      }}
    />
  );
}
