import styled from 'styled-components'

export const Container = styled.main`
  min-width: 32rem;
  padding: 1.6rem;
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  background-color: ${(props) => props.theme['surface-primary']};
`

export const CurrencyConverter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;

  > img {
    width: 2.4rem;
    height: 2.4rem;
    cursor: pointer;
  }
`
