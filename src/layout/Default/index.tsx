import React from 'react'

import Navbar from '../../components/Navbar'

interface Props {
  children: React.ReactElement | React.ReactElement[] | string | number
}

const DefaultLayout = ({ children }: Props): React.ReactElement => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default DefaultLayout
