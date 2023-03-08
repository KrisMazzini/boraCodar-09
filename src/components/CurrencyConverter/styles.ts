import styled from 'styled-components'

export const Converter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;

  > img {
    width: 2.4rem;
    height: 2.4rem;
    cursor: pointer;
  }

  @media (min-width: 712px) {
    flex-direction: row;
    gap: 1.6rem;
  }
`
