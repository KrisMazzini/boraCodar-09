import styled from 'styled-components'

const CONTENT_GAP = {
  sm: '0.8rem',
  md: '1.6rem',
  lg: '2.4rem',
} as const

export interface ContainerProps {
  contentGap?: keyof typeof CONTENT_GAP
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => CONTENT_GAP[props.contentGap || 'md']};

  > p {
    font-weight: 600;
  }
`
