import { useState, useRef, useEffect } from 'react'

import chevronDown from '../../assets/chevron-down.svg'
import { Container, CurrencySelector, Divider, InputWrapper } from './styles'

import { Currency } from '../Currency'
import { CurrencyList } from '../CurrencyList'

import { CurrencyType } from '../../contexts/CurrenciesContext'

interface CurrencyWrapperProps {
  amount: number | undefined
  currency: CurrencyType
  onChangeCurrency: (newCurrency: CurrencyType) => void
  onChangeAmount: (newAmount: number) => void
}

export function CurrencyWrapper({
  amount,
  currency,
  onChangeCurrency,
  onChangeAmount,
}: CurrencyWrapperProps) {
  const [openList, setOpenList] = useState(false)

  const ref = useRef<HTMLDivElement>(null)

  function handleToggleList() {
    setOpenList((prev) => !prev)
  }

  useEffect(() => {
    function handleOutsideComponentClick(event: MouseEvent) {
      const clickedWithinComponent =
        ref?.current && ref.current.contains(event.target)

      if (!clickedWithinComponent) {
        setOpenList(false)
      }
    }

    document.addEventListener('click', handleOutsideComponentClick)
  }, [])

  return (
    <Container>
      <InputWrapper>
        <span>$&nbsp;</span>
        <input
          type="number"
          name="amout"
          value={amount || ''}
          placeholder="0"
          onChange={(event) => onChangeAmount(Number(event.target.value))}
        />
      </InputWrapper>
      <Divider />
      <CurrencySelector onClick={handleToggleList} ref={ref}>
        <Currency {...currency} />
        <img src={chevronDown} alt="chevron down" />
        {openList ? <CurrencyList handleSelect={onChangeCurrency} /> : <></>}
      </CurrencySelector>
    </Container>
  )
}
