import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  border: 1px solid ${(props) => props.theme['graphic-elements']};
  border-radius: 8px;

  background-color: ${(props) => props.theme['surface-primary']};

  position: relative;

  &:focus-within {
    border: 1.5px solid ${(props) => props.theme.highlight};
  }
`

export const Divider = styled.div`
  width: 0.1rem;
  height: 2.4rem;

  background-color: ${(props) => props.theme['graphic-elements']};
`

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1.6rem;

  flex-grow: 1;

  input {
    all: unset;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &[type='number'] {
      -moz-appearance: textfield;
    }
  }
`

export const CurrencySelector = styled.div`
  width: 13rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.8rem;

  padding: 1.6rem;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;

  position: relative;

  cursor: pointer;

  transition: background-color 150ms linear;

  &:hover {
    background-color: ${(props) => props.theme['surface-secondary']};
  }

  > img {
    width: 2.4rem;
    height: 2.4rem;
  }
`
