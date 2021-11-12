import Head from 'next/head'
import Header from '../components/Header'
import Pricing from '../components/Pricing'
import About from '../components/About'
import Features from '../components/Features'
import Subscribe from '../components/Subscribe'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>IPTV Global | The best IPTV subscription on the go</title>
        <meta name="description" content="Enjoy 8000+ Channel For As Low 20$/month" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
      </Head>

      <Header />
      <Pricing />
      <About />
      <Features />
      <Subscribe />
      <Footer />
    </>
  )
}
