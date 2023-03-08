import { useContext, useEffect, useState } from 'react'

import arrowsExchange from '../../assets/arrows-exchange.svg'
import { Converter } from './styles'

import { CardSection } from '../CardSection'
import { CurrencyWrapper } from '../CurrencyWrapper'

import { calculateAvarageRate } from '../../utils.avarageRate'
import { api } from '../../services/api'
import { CurrencyType } from '../../constants/currencies'
import { CurrenciesContext } from '../../contexts/CurrenciesContext'

export interface ConversionType {
  high: string
  low: string
}

export function CurrencyConverter() {
  const { inputCurrency, outputCurrency, setInputCurrency, setOutputCurrency } =
    useContext(CurrenciesContext)

  const [inputAmount, setInputAmount] = useState(0)
  const [outputAmount, setOutputAmount] = useState(0)

  const [exchangeRate, setExchangeRate] = useState(0)

  function handleChangeInputCurrency(newCurrency: CurrencyType) {
    if (newCurrency.code === outputCurrency.code) {
      handleSwapCurrencies()
      return
    }

    setInputCurrency(newCurrency)
  }

  function handleChangeInputAmount(newAmount: number) {
    setInputAmount(roundAmount(newAmount))
    setOutputAmount(roundAmount(exchangeRate * newAmount))
  }

  function handleChangeOutputCurrency(newCurrency: CurrencyType) {
    if (newCurrency.code === inputCurrency.code) {
      handleSwapCurrencies()
      return
    }

    setOutputCurrency(newCurrency)
  }

  function handleSwapCurrencies() {
    const inputCurr = { ...inputCurrency }
    const inAmount = inputAmount
    setInputCurrency({ ...outputCurrency })
    setOutputCurrency({ ...inputCurr })
    setInputAmount(outputAmount)
    setOutputAmount(inAmount)
  }

  function roundAmount(amount: number, digits?: number) {
    return Number(amount.toFixed(digits || 2))
  }

  useEffect(() => {
    async function handleExchangeRate() {
      try {
        const response = await api.get(
          `${inputCurrency.code}-${outputCurrency.code}`,
        )
        const exchangeRageData = response.data as ConversionType[]

        const { high, low } = exchangeRageData[0]
        const avarageRate = calculateAvarageRate(high, low)
        setExchangeRate(avarageRate)
        setOutputAmount(roundAmount(avarageRate * inputAmount))

        console.log('Exchange Rate obtained successfully.')
      } catch (e) {
        console.error(e)
        setInputAmount(0)
        setOutputAmount(0)
      }
    }

    handleExchangeRate()
  }, [inputCurrency, outputCurrency])

  return (
    <CardSection title="Currency converter">
      <Converter>
        <CurrencyWrapper
          amount={inputAmount}
          currency={inputCurrency}
          onChangeCurrency={handleChangeInputCurrency}
          onChangeAmount={handleChangeInputAmount}
        />
        <img
          src={arrowsExchange}
          alt="two arrows pointing left and right"
          onClick={handleSwapCurrencies}
        />
        <CurrencyWrapper
          amount={outputAmount}
          currency={outputCurrency}
          onChangeCurrency={handleChangeOutputCurrency}
          disabled
        />
      </Converter>
    </CardSection>
  )
}
