import '@/styles/globals.css'
import Head from 'next/head.js'
import Layout from '../components/layout.js'

export default function App({ Component, pageProps }) {
  return(
    <Layout>
      <Head>
        <title>news96</title>
        <link rel="icon" type="image/x-icon" href="/image/favicon.ico" />
        <meta name="description" content="get realtime news updates" />
      </Head>
    

  <Component {...pageProps} />
  </Layout>
  ) 

}
