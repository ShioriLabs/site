import React from 'react'
import Head from 'next/head'

import Layout from '../layout/Default'

import Container from '../components/Container'
import Hero, { HeroHeader, HeroSubheader, HeroTextContainer } from '../components/Hero'
import HomeSection, { HomeSectionTextContainer, HomeSectionTitle, HomeSectionText } from '../components/HomeSection'

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
      <HomeSection invertedBackground>
        <HomeSectionTextContainer>
          <HomeSectionTitle>Kami adalah Shiori Labs</HomeSectionTitle>
          <HomeSectionText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pengen megane gf gan.
          </HomeSectionText>
        </HomeSectionTextContainer>
      </HomeSection>
      <HomeSection invertedDirection>
        <HomeSectionTextContainer>
          <HomeSectionTitle>Kami adalah Shiori Labs</HomeSectionTitle>
          <HomeSectionText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pengen megane gf gan.
          </HomeSectionText>
        </HomeSectionTextContainer>
      </HomeSection>
      <HomeSection invertedBackground>
        <HomeSectionTextContainer>
          <HomeSectionTitle>Kami adalah Shiori Labs</HomeSectionTitle>
          <HomeSectionText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pengen megane gf gan.
          </HomeSectionText>
        </HomeSectionTextContainer>
      </HomeSection>
    </Layout>
  )
}

export default Index
