import { useState } from 'react'
import { CardSection } from '../CardSection'
import { LineChart } from '../LineChart'
import { IntervalSelector, Interval, SelectedInterval } from './styles'

const INTERVALS = ['1D', '5D', '1M', '1Y', '5Y', 'Max'] as const

type IntervalType = (typeof INTERVALS)[number]

export function ExchangeRate() {
  const [interval, setInterval] = useState<IntervalType>('1M')

  const intervals = Object.values(INTERVALS)

  function handleSelectInterval(newInterval: IntervalType) {
    setInterval(newInterval)
  }

  return (
    <CardSection title="Exchange Rate" contentGap="lg">
      <LineChart />
      <IntervalSelector>
        {intervals.map((int) => {
          return interval === int ? (
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
