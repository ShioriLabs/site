import React from 'react'
import Head from 'next/head'

import Layout from '../../layout/Default'

import Container from '../../components/Container'
import PageHeader, { PageHeaderTitle, PageHeaderTextContainer } from '../../components/PageHeader'

const Index = (): React.ReactElement => {
  return (
    <Layout>
      <Head>
        <title>Tentang - Shiori Labs</title>
      </Head>
      <Container>
        <PageHeader>
          <PageHeaderTextContainer>
            <PageHeaderTitle>Tentang Shiori Labs</PageHeaderTitle>
          </PageHeaderTextContainer>
        </PageHeader>
      </Container>
      <Container>
        <PageHeaderTextContainer>
          <p>
            Shiori Labs adalah sebuah proyek komunitas yang menyediakan tutorial dan tempat belajar teknologi yang menyenangkan.
            <br />
            <br />
            Proyek Shiori Labs dimulai pada tahun 2020 dan mulai dilaksanakan pada awal tahun 2021.
          </p>
        </PageHeaderTextContainer>
      </Container>
    </Layout>
  )
}

export default Index
