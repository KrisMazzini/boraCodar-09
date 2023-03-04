import { ReactNode } from 'react'
import { Container, ContainerProps } from './styles'

interface CardSectionProps extends ContainerProps {
  title: string
  children: ReactNode
}

export function CardSection({ title, children, ...props }: CardSectionProps) {
  return (
    <Container {...props}>
      <p>{title}</p>
      {children}
    </Container>
  )
}
