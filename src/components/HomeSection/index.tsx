import React from 'react'
import styled, { css } from 'styled-components'

import Container from '../Container'

interface HomeSectionBaseProps {
  invertedBackground?: boolean
}

const HomeSectionBase = styled.section<HomeSectionBaseProps>`
  ${props => props.invertedBackground && css`
    background: ${props.theme.colors.branding};
    color: ${props.theme.colors.white};
  `}
  display: flex;
  align-items: center;
  padding: 32px 0px;
  box-sizing: border-box;
  min-height: 360px;
`

interface HomeSectionContainerProps {
  invertedDirection?: boolean
}

const HomeSectionContainer = styled(Container)<HomeSectionContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  ${props => props.invertedDirection && css`
    flex-direction: row-reverse
  `}
`

const HomeSectionTextContainer = styled.div`
  width: 480px;
`

const HomeSectionTitle = styled.span`
  font-size: 36px;
  font-weight: ${props => props.theme.fontWeights.bold};
  margin-bottom: 32px;
  display: block;
`

const HomeSectionText = styled.p`
  margin: 0px;
  font-size: 24px;
  line-height: 30px;
  box-sizing: border-box;
`

interface HomeSectionProps extends HomeSectionBaseProps, HomeSectionContainerProps {
  children: React.ReactElement | React.ReactElement[] | string
}

const HomeSection = ({ children, invertedBackground, invertedDirection }: HomeSectionProps): React.ReactElement => {
  return (
    <HomeSectionBase invertedBackground={invertedBackground}>
      <HomeSectionContainer invertedDirection={invertedDirection}>
        {children}
      </HomeSectionContainer>
    </HomeSectionBase>
  )
}

export default HomeSection
export { HomeSectionTextContainer, HomeSectionTitle, HomeSectionText, HomeSectionContainer }
