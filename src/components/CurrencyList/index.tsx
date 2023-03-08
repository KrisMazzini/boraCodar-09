import { useContext } from 'react'
import { Container } from './styles'

import { CurrenciesContext } from '../../contexts/CurrenciesContext'
import { CurrencyType } from '../../constants/currencies'

import { Currency } from '../Currency'

interface CurrencyListProps {
  handleSelect: (newCurrency: CurrencyType) => void
}

export function CurrencyList({ handleSelect }: CurrencyListProps) {
  const { currencies } = useContext(CurrenciesContext)

  return (
    <Container>
      {currencies.map((currency) => {
        return (
          <div key={currency.code} onClick={() => handleSelect(currency)}>
            <Currency {...currency} key={currency.code} />
          </div>
        )
      })}
    </Container>
  )
}
