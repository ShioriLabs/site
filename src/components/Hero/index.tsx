import styled from 'styled-components'

const Hero = styled.div`
  min-height: 560px;
  display: flex;
  align-items: center;
`

const HeroTextContainer = styled.div`
  max-width: 560px;
`

const HeroHeader = styled.h1`
  font-size: 48px;
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.branding};
  margin: 0px;
  margin-bottom: 32px;

  &:last-child {
    margin-bottom: 0px;
  }
`

const HeroSubheader = styled.p`
  font-size: 24px;
  margin: 0px;
`

export default Hero
export { HeroHeader, HeroSubheader, HeroTextContainer }
