import React from 'react'
import Head from 'next/head'

import Layout from '../layout/Default'

import Container from '../components/Container'
import Hero, { HeroHeader, HeroSubheader, HeroTextContainer } from '../components/Hero'

const Index = (): React.ReactElement => {
  return (
    <Layout>
      <Head>
        <title>Shiori Labs</title>
      </Head>
      <Container>
        <Hero>
          <HeroTextContainer>
            <HeroHeader>Sebuah Tempat Dimana Kesenangan Dibuat</HeroHeader>
            <HeroSubheader>Kami Shiori Labs, dan kami membuat hal-hal yang menyenangkan!</HeroSubheader>
          </HeroTextContainer>
        </Hero>
      </Container>
    </Layout>
  )
}

export default Index
