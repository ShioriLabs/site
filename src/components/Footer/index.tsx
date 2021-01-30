import React from 'react'

import { Base, FooterContainer, LeadingContainer, CopyText, CopySubtext } from './index.styled'

const Footer = (): React.ReactElement => {
  return (
    <Base>
      <FooterContainer>
        <LeadingContainer>
          <CopyText>Hai dari Bekasi!</CopyText>
          <CopySubtext>Shiori Labs, {new Date().getFullYear()}</CopySubtext>
        </LeadingContainer>
      </FooterContainer>
    </Base>
  )
}

export default Footer
