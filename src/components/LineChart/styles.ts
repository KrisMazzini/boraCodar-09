import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  0% {
    opacity: 0
  }
  100% {
    opacity: 1
  }
`

export const Container = styled.div`
  width: 100%;
  height: 16rem;

  display: flex;
  gap: 0.8rem;

  @media (min-width: 712px) {
    height: 35.6rem;
  }
`

export const Legend = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 1.2rem;
    line-height: 1.6rem;

    color: ${(props) => props.theme['text-secondary']};

    &:first-child {
      transform: translateY(-50%);
    }

    &:nth-child(2) {
      transform: translateY(-20%);
    }

    &:nth-child(3) {
      transform: translateY(20%);
    }

    &:last-child {
      transform: translateY(50%);
    }
  }
`

export const Grid = styled(Legend)`
  min-width: 0;
  flex-grow: 1;

  position: relative;

  > div {
    height: 1px;
    width: 100%;
    background-color: ${(props) => props.theme['graphic-elements']};
    opacity: 0.3;
  }

  svg {
    position: absolute;
    animation: ${fadeIn} 500ms linear;

    line {
      stroke: ${(props) => props.theme.highlight};
      stroke-width: 2;
    }

    circle {
      cursor: pointer;
      transition: fill 150ms linear;

      fill: ${(props) => props.theme.transparent};
      stroke: none;

      &:hover {
        fill: ${(props) => props.theme.highlight};
      }
    }

    polygon {
      fill: url(#chart-gradient);
    }
  }
`
