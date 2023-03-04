import styled from 'styled-components'

export const Container = styled.main`
  min-width: 32rem;
  padding: 1.6rem;
  border-radius: 16px;

  background-color: ${(props) => props.theme['surface-primary']};
`
