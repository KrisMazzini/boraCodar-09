import { Container } from './styles'

import { ExchangeRate } from '../../components/ExchangeRate'
import { CurrencyConverter } from '../../components/CurrencyConverter'

export function Home() {
  return (
    <Container>
      <CurrencyConverter />
      <ExchangeRate />
    </Container>
  )
}
