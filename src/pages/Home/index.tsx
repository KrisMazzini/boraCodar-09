import { CardSection } from '../../components/CardSection'
import { Container } from './styles'

export function Home() {
  return (
    <Container>
      <CardSection title="Conversor de moedas">Conversor de moedas</CardSection>
      <CardSection title="Taxa de câmbio" contentGap="lg">
        Taxa de câmbio
      </CardSection>
    </Container>
  )
}
