import React from 'react'
import styled from 'styled-components'

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const Content = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

interface Props {
  children: React.ReactElement | React.ReactElement[] | string | number
}

const DefaultLayout = ({ children }: Props): React.ReactElement => {
  return (
    <Content>
      <Navbar />
      {children}
      <Footer />
    </Content>
  )
}

export default DefaultLayout
