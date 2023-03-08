import { useEffect, useState, useContext } from 'react'
import moment from 'moment'

import { IntervalSelector, Interval, SelectedInterval } from './styles'

import { CardSection } from '../CardSection'
import { LineChart } from '../LineChart'

import { api } from '../../services/api'
import { calculateAvarageRate } from '../../utils.avarageRate'

import { CurrenciesContext } from '../../contexts/CurrenciesContext'
import { ConversionType } from '../CurrencyConverter'
moment.locale('pt-br')

interface ExchangeRateType extends ConversionType {
  timestamp: string
}

const INTERVALS = {
  '1D': {
    amount: 10,
    parameter: 'days',
  },
  '5D': {
    amount: 30,
    parameter: 'days',
  },
  '1M': {
    amount: 60,
    parameter: 'days',
  },
  '1Y': {
    amount: 120,
    parameter: 'days',
  },
  '5Y': {
    amount: 240,
    parameter: 'days',
  },
  Max: {
    amount: 360,
    parameter: 'days',
  },
} as const

type IntervalType = keyof typeof INTERVALS

export function ExchangeRate() {
  const { inputCurrency, outputCurrency } = useContext(CurrenciesContext)
  const [selectedInterval, setSelectedInterval] = useState<IntervalType>('1M')
  const [exchangeData, setExchangeData] = useState<number[]>([])

  const intervals = Object.keys(INTERVALS) as IntervalType[]

  function handleSelectInterval(newInterval: IntervalType) {
    setSelectedInterval(newInterval)
  }

  useEffect(() => {
    function sortByAscendingTimestamp(
      exchangeRateA: ExchangeRateType,
      exchangeRateB: ExchangeRateType,
    ) {
      return Number(exchangeRateA.timestamp) - Number(exchangeRateB.timestamp)
    }

    async function handleExchangeRateData() {
      try {
        const currencies = `${inputCurrency.code}-${outputCurrency.code}`

        const response = await api.get(
          `json/daily/${currencies}/${INTERVALS[selectedInterval].amount}`,
        )

        const exchangeRateData = response.data as ExchangeRateType[]
        const avarageRates = exchangeRateData
          .sort(sortByAscendingTimestamp)
          .map((rate) => calculateAvarageRate(rate.high, rate.low))

        setExchangeData(avarageRates)

        console.log('Exchange Rate History obtained successfully.')
      } catch (e) {
        console.error(e)
        setExchangeData([])
      }
    }

    handleExchangeRateData()
  }, [inputCurrency, outputCurrency, selectedInterval])

  return (
    <CardSection title="Exchange Rate" contentGap="lg">
      <LineChart data={exchangeData} />
      <IntervalSelector>
        {intervals.map((int: IntervalType) => {
          return selectedInterval === int ? (
            <SelectedInterval key={int}>{int}</SelectedInterval>
          ) : (
            <Interval key={int} onClick={() => handleSelectInterval(int)}>
              {int}
            </Interval>
          )
        })}
      </IntervalSelector>
    </CardSection>
  )
}
