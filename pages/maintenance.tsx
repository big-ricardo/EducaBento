import Head from 'next/head';

import Maintenance from '../src/views/Maintenance'
import Header from '../src/template/Header'
import Footer from '../src/template/Footer'

export default function MaintenancePagr() {
  return (<>
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
    <Header />
    <Maintenance />
    <Footer />
  </>
  )
}
