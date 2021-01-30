import React from 'react'
import Head from 'next/head'

import Layout from '../layout/Default'

import Container from '../components/Container'
import Hero, { HeroHeader, HeroSubheader, HeroTextContainer } from '../components/Hero'
// import HomeSection, { HomeSectionTextContainer, HomeSectionTitle, HomeSectionText } from '../components/HomeSection'

const Index = (): React.ReactElement => {
  return (
    <Layout>
      <Head>
        <title>Shiori Labs</title>
      </Head>
      <Container>
        <Hero>
          <HeroTextContainer>
            <HeroHeader>Hai!</HeroHeader>
            <HeroSubheader>Kami sedang mempersiapkan halaman ini, mohon ditunggu ya!</HeroSubheader>
          </HeroTextContainer>
        </Hero>
      </Container>
      {/* <HomeSection invertedBackground>
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
      </HomeSection> */}
    </Layout>
  )
}

export default Index
