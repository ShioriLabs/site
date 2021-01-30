import styled from 'styled-components'

import { NavContainer } from '../Navbar/index.styled'

const Base = styled.footer`
  width: 100%;
  border-top: 1px solid ${props => props.theme.colors.borderColor};
  margin-top: auto;
`

const FooterContainer = NavContainer

const LeadingContainer = styled.div`
`

const TrailingContainer = styled.div`
  margin-left: auto;
`

const CopyText = styled.span`
  display: block;
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.branding};
`
const CopySubtext = styled.span`
  display: block;
  font-size: 16px;
  font-weight: ${props => props.theme.fontWeights.bold};
  margin-top: 2px;
`

export default {}
export { Base, FooterContainer, LeadingContainer, TrailingContainer, CopyText, CopySubtext }
