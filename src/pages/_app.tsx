import React from 'react'
import { AppProps } from 'next/dist/next-server/lib/router/router'

import 'normalize.css'

export default function App ({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <>
      {/* <GlobalStyle />
      <ThemeProvider theme={theme}> */}
        <Component {...pageProps} />
      {/* </ThemeProvider> */}
    </>
  )
}
