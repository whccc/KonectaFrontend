import React from 'react'
import { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalStyle from '../styles/global'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import Head from 'next/head'
const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <title>BlogKonecta</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default MyApp
