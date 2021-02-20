import fetch from 'cross-fetch';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import { apiEndpoint } from '@/src/config/prismic_configuration'

import Prismic from '@prismicio/client'
import { Document } from 'prismic-javascript/types/documents';
import { RichText } from 'prismic-reactjs';

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
  const [options, setOptions] = React.useState<Document[]>([]);
  const loading = open && options.length === 0;


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
      setOptions([]);
    }
  }, [open]);

  React.useMemo(() => {
    if (search != "") {
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
      console.log(response.results);
      setOptions(response.results)
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
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Pesquisar"
          variant="outlined"
          value={search}
          onChange={e => { setSearch(e.target.value) }}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
      renderOption={(option) => {

        return (<>

          <Grid container alignItems="center">
             <Grid item>
              <CircularProgress/>
            </Grid>
            <Grid item xs>
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
