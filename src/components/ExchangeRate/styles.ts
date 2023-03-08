import styled, { DefaultTheme, keyframes } from 'styled-components'

const fadeBackgroundIn = (theme: DefaultTheme) => keyframes`
    100% {
        background-color: ${theme.highlight};
        color: ${theme['surface-primary']};

    }
`

export const IntervalSelector = styled.div`
  align-self: flex-end;

  display: flex;
  align-items: center;
  gap: 0.32rem;
`

export const Interval = styled.span`
  font-size: 1.2rem;
  line-height: 1.6rem;

  display: block;
  padding: 0.4rem 0.8rem;

  text-align: center;
  color: ${(props) => props.theme['text-primary']};
  background-color: ${(props) => props.theme['surface-primary']};

  cursor: pointer;
`

export const SelectedInterval = styled(Interval)`
  border-radius: 999px;

  animation: ${(props) => fadeBackgroundIn(props.theme)} 150ms linear forwards;
`
