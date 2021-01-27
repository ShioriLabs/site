import styled, { css } from 'styled-components'

import Container from '../Container'

const Nav = styled.nav`
  width: 100%;
  background: ${props => props.theme.colors.white}
`

const NavContainer = styled(Container)`
  display: flex;
  align-items: center;
`

const Text = css`
  font-size: 18px;
`

const Logo = styled.span`
  ${Text}
  color: ${props => props.theme.colors.branding};
  font-weight: ${props => props.theme.fontWeights.bold};
  margin-right: 48px;
`

const LinkContainer = styled.div`
`

interface AProps {
  active?: boolean
}

const A = styled.a<AProps>`
  ${Text}
  color: ${props => props.theme.colors.black};
  text-decoration: none;
  margin-right: 24px;

  &:last-child {
    margin-right: 0px;
  }

  ${props => props.active && css`
    font-weight: ${props => props.theme.fontWeights.bold};
  `}

`

export default {}
export { Nav, Logo, NavContainer, LinkContainer, A }
