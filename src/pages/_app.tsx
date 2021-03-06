import React from 'react'
import Head from 'next/head'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { AppProps } from 'next/dist/next-server/lib/router/router'

import theme from '../theme/default'

import 'normalize.css'

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => props.theme.colors.black};
    font-weight: ${props => props.theme.fontWeights.normal};
    font-family: "Quicksand", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    font-size: 18px;
  }
`

export default function App ({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500;700&display=swap" rel="stylesheet" />
          <title>Shiori Labs</title>
          <link rel="shortcut icon" href="/favicon.png" type="image/png" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        </Head>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
