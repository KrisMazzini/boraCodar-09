import { useState, useContext } from 'react'

import arrowsExchange from '../../assets/arrows-exchange.svg'
import { Container, CurrencyConverter } from './styles'

import { CardSection } from '../../components/CardSection'
import { CurrencyWrapper } from '../../components/CurrencyWrapper'

import {
  CurrenciesContext,
  CurrencyType,
} from '../../contexts/CurrenciesContext'
import { ExchangeRate } from '../../components/ExchangeRate'

interface ConvertCurrencyType {
  amount: number | undefined
  currency: CurrencyType
}

export function Home() {
  const { currencies } = useContext(CurrenciesContext)

  const [inputCurrency, setInputCurrency] = useState<ConvertCurrencyType>({
    currency: currencies[7],
    amount: 0,
  })

  const [outputCurrency, setOutputCurrency] = useState<ConvertCurrencyType>({
    currency: currencies[20],
    amount: 0,
  })

  function handleChangeInputCurrency(newCurrency: CurrencyType) {
    if (newCurrency.code === outputCurrency.currency.code) {
      handleSwapCurrencies()
      return
    }

    setInputCurrency((prev) => {
      return { ...prev, currency: newCurrency }
    })
  }

  function handleChangeInputAmount(newAmount: number) {
    setInputCurrency((prev) => {
      return { ...prev, amount: newAmount }
    })

    setOutputCurrency((prev) => {
      return { ...prev, amount: 2 * newAmount }
    })
  }

  function handleChangeOutputCurrency(newCurrency: CurrencyType) {
    if (newCurrency.code === inputCurrency.currency.code) {
      handleSwapCurrencies()
      return
    }

    setOutputCurrency((prev) => {
      return { ...prev, currency: newCurrency }
    })
  }

  function handleSwapCurrencies() {
    const inputCurr = { ...inputCurrency }
    setInputCurrency({ ...outputCurrency })
    setOutputCurrency({ ...inputCurr })
  }

  return (
    <Container>
      <CardSection title="Conversor de moedas">
        <CurrencyConverter>
          <CurrencyWrapper
            amount={inputCurrency.amount}
            currency={inputCurrency.currency}
            onChangeCurrency={handleChangeInputCurrency}
            onChangeAmount={handleChangeInputAmount}
          />
          <img
            src={arrowsExchange}
            alt="two arrows pointing left and right"
            onClick={handleSwapCurrencies}
          />
          <CurrencyWrapper
            amount={outputCurrency.amount}
            currency={outputCurrency.currency}
            onChangeCurrency={handleChangeOutputCurrency}
            disabled
          />
        </CurrencyConverter>
      </CardSection>
      <ExchangeRate />
    </Container>
  )
}
