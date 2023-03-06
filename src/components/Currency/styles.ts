import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  span {
    color: ${(props) => props.theme['text-primary']};
    line-height: 1.9rem;
  }

  img {
    width: 2.4rem;
    height: 2.4rem;
    object-fit: cover;
    border-radius: 50%;
  }
`
