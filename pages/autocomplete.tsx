import Head from 'next/head';

import Maintenance from '../src/views/Maintenance'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import Auto from '../src/components/Header/AutoComplete'

export default function MaintenancePagr() {
  return(<>
     <Head>
          <title>Manutenção | Educação Bento</title>
          <meta
            name="og:title"
            property="og:title"
            content='Manutenção | Educação Bento'
          />
          <meta
            name="description"
            content='Sua plataforma de estudos gratuita'
          />
      </Head>

    <Header/>
    </>
  )
}
