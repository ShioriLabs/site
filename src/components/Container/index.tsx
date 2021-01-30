import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  max-width: ${props => props.theme.breakpoints.lg};
  padding: 24px;
  margin: 0px auto;
  box-sizing: border-box;

  @media (min-width: ${props => props.theme.breakpoints.xl}) {
    max-width: ${props => props.theme.breakpoints.xl}
  }
`

export default Container
