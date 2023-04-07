import '@/styles/globals.css'
import Head from 'next/head.js'
import Layout from '../components/layout.js'

export default function App({ Component, pageProps }) {
  return(
    <Layout>
      <Head>
        <title>news96</title>
        <link rel="icon" type="image/x-icon" href="/image/favicon.ico" />
        <meta name="description" content="get realtime news updates and stay updated wth job posting and latest sports,ipl news.stay updated with geoploitics" />
        <meta name="keywords" content="news96,newstoday,breaking news,news,india today,hlo india" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4700790597407744" crossorigin="anonymous"></script>
      </Head>
    

  <Component {...pageProps} />
  </Layout>
  ) 

}
