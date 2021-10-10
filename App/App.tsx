import React, { ReactElement } from 'react'
import Head from 'next/head'
import Header from './components/Header'
import Footer from './components/Footer'

function App(props: { children: ReactElement }) {
  const { children } = props

  return (
    <div className="App">
      <Head>
        <title>My-NextJs-App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          href="http://fonts.cdnfonts.com/css/adobe-clean"
          rel="stylesheet"
        />
      </Head>

      <Header />

      <main>{children}</main>

      <Footer />
    </div>
  )
}

export default App