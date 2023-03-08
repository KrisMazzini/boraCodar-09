import styled from 'styled-components'

export const Container = styled.div`
  width: 13rem;
  height: 17rem;

  display: grid;
  grid-auto-flow: row;
  grid-auto-rows: 4.8rem;
  grid-template-columns: 1fr;

  border-radius: 8px;
  box-shadow: 0px 4px 16px rgba(15, 23, 42, 0.15);
  background-color: ${(props) => props.theme['surface-primary']};

  overflow-y: scroll;
  overflow-y: overlay;
  overflow-x: hidden;

  cursor: pointer;

  position: absolute;
  bottom: -17.8rem;
  left: 0;
  z-index: 1;

  ::-webkit-scrollbar {
    width: 2px;
    border-radius: 8px;
    display: none;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme['graphic-elements']};
    border-radius: 99px;
  }

  > div {
    display: flex;
    align-items: center;
    padding: 0 1.2rem;

    transition: background-color 150ms linear;

    :hover {
      background-color: ${(props) => props.theme['surface-secondary']};
    }
  }

  @media (min-width: 712px) {
    width: 16rem;
  }
`
