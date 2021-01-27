import styled from 'styled-components'

import Hero, { HeroTextContainer, HeroHeader, HeroSubheader } from '../Hero'

const PageHeader = styled(Hero)`
  min-height: 240px;
`

const PageHeaderTextContainer = styled(HeroTextContainer)`
`

const PageHeaderTitle = styled(HeroHeader)`
  font-size: 36px;
  margin-bottom: 32px;

  &:last-child {
    margin-bottom: 0px;
  }
`

const PageHeaderSubtitle = styled(HeroSubheader)`
  margin: 0px;
  font-size: 24px;
  line-height: 30px;
`

export default PageHeader
export { PageHeaderTextContainer, PageHeaderTitle, PageHeaderSubtitle }
