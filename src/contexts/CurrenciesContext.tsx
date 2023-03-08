import {
  useState,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react'

import { CurrencyType, currencies } from '../constants/currencies'

interface CurrenciesContextProviderProps {
  children: ReactNode
}

interface CurrenciesContextType {
  currencies: CurrencyType[]
  inputCurrency: CurrencyType
  outputCurrency: CurrencyType
  setInputCurrency: Dispatch<SetStateAction<CurrencyType>>
  setOutputCurrency: Dispatch<SetStateAction<CurrencyType>>
}

export const CurrenciesContext = createContext({} as CurrenciesContextType)

export function CurrenciesContextProvider({
  children,
}: CurrenciesContextProviderProps) {
  const [inputCurrency, setInputCurrency] = useState<CurrencyType>(
    findCurrencyByCode('BRL'),
  )

  const [outputCurrency, setOutputCurrency] = useState<CurrencyType>(
    findCurrencyByCode('EUR'),
  )

  function findCurrencyByCode(code: string) {
    return (
      currencies.find((currency) => currency.code === code) || currencies[0]
    )
  }

  return (
    <CurrenciesContext.Provider
      value={{
        currencies,
        inputCurrency,
        outputCurrency,
        setInputCurrency,
        setOutputCurrency,
      }}
    >
      {children}
    </CurrenciesContext.Provider>
  )
}
