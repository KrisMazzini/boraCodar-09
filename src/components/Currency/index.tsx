import { Container } from './styles'

import { CurrencyType as CurrencyProps } from '../../constants/currencies'

export function Currency({ code, name, flagUrl }: CurrencyProps) {
  return (
    <Container>
      <img src={flagUrl} alt="" />
      <span title={name}>{code}</span>
    </Container>
  )
}
