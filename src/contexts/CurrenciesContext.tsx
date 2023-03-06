import { createContext, ReactNode } from 'react'

export interface CurrencyType {
  code: string
  name: string
  flagUrl: string
}

interface CurrenciesContextProviderProps {
  children: ReactNode
}

interface CurrenciesContextType {
  currencies: CurrencyType[]
}

export const CurrenciesContext = createContext({} as CurrenciesContextType)

export function CurrenciesContextProvider({
  children,
}: CurrenciesContextProviderProps) {
  const currencies: CurrencyType[] = [
    {
      code: 'AED',
      name: 'United Arab Emirates dirham',
      flagUrl: 'https://flagcdn.com/ae.svg',
    },
    {
      code: 'ARS',
      name: 'Argentine peso',
      flagUrl: 'https://flagcdn.com/ar.svg',
    },
    {
      code: 'AUD',
      name: 'Australian dollar',
      flagUrl: 'https://flagcdn.com/au.svg',
    },
    {
      code: 'BBD',
      name: 'Barbadian dollar',
      flagUrl: 'https://flagcdn.com/bb.svg',
    },
    {
      code: 'BDT',
      name: 'Bangladeshi taka',
      flagUrl: 'https://flagcdn.com/bd.svg',
    },
    {
      code: 'BGN',
      name: 'Bulgarian lev',
      flagUrl: 'https://flagcdn.com/bg.svg',
    },
    {
      code: 'BOB',
      name: 'Bolivian boliviano',
      flagUrl: 'https://flagcdn.com/bo.svg',
    },
    {
      code: 'BRL',
      name: 'Brazilian real',
      flagUrl: 'https://flagcdn.com/br.svg',
    },
    {
      code: 'CAD',
      name: 'Canadian dollar',
      flagUrl: 'https://flagcdn.com/ca.svg',
    },
    {
      code: 'CHF',
      name: 'Swiss franc',
      flagUrl: 'https://flagcdn.com/ch.svg',
    },
    {
      code: 'CLP',
      name: 'Chilean peso',
      flagUrl: 'https://flagcdn.com/cl.svg',
    },
    {
      code: 'CNY',
      name: 'Chinese yuan',
      flagUrl: 'https://flagcdn.com/cn.svg',
    },
    {
      code: 'COP',
      name: 'Colombian peso',
      flagUrl: 'https://flagcdn.com/co.svg',
    },
    {
      code: 'CRC',
      name: 'Costa Rican colón',
      flagUrl: 'https://flagcdn.com/cr.svg',
    },
    { code: 'CUP', name: 'Cuban peso', flagUrl: 'https://flagcdn.com/cu.svg' },
    {
      code: 'CZK',
      name: 'Czech koruna',
      flagUrl: 'https://flagcdn.com/cz.svg',
    },
    {
      code: 'DKK',
      name: 'Danish krone',
      flagUrl: 'https://flagcdn.com/dk.svg',
    },
    {
      code: 'DOP',
      name: 'Dominican peso',
      flagUrl: 'https://flagcdn.com/do.svg',
    },
    {
      code: 'DZD',
      name: 'Algerian dinar',
      flagUrl: 'https://flagcdn.com/dz.svg',
    },
    {
      code: 'EGP',
      name: 'Egyptian pound',
      flagUrl: 'https://flagcdn.com/eg.svg',
    },
    {
      code: 'EUR',
      name: 'Euro',
      flagUrl: 'https://flagcdn.com/eu.svg',
    },
    {
      code: 'GBP',
      name: 'British pound',
      flagUrl: 'https://flagcdn.com/gb.svg',
    },
    {
      code: 'HUF',
      name: 'Hungarian forint',
      flagUrl: 'https://flagcdn.com/hu.svg',
    },
    {
      code: 'INR',
      name: 'Indian rupee',
      flagUrl: 'https://flagcdn.com/in.svg',
    },
    {
      code: 'ISK',
      name: 'Icelandic króna',
      flagUrl: 'https://flagcdn.com/is.svg',
    },
    {
      code: 'JMD',
      name: 'Jamaican dollar',
      flagUrl: 'https://flagcdn.com/jm.svg',
    },
    {
      code: 'JOD',
      name: 'Jordanian dinar',
      flagUrl: 'https://flagcdn.com/jo.svg',
    },
    {
      code: 'JPY',
      name: 'Japanese yen',
      flagUrl: 'https://flagcdn.com/jp.svg',
    },
    {
      code: 'KPW',
      name: 'North Korean won',
      flagUrl: 'https://flagcdn.com/kp.svg',
    },
    {
      code: 'KRW',
      name: 'South Korean won',
      flagUrl: 'https://flagcdn.com/kr.svg',
    },
    {
      code: 'KZT',
      name: 'Kazakhstani tenge',
      flagUrl: 'https://flagcdn.com/kz.svg',
    },
    {
      code: 'MAD',
      name: 'Moroccan dirham',
      flagUrl: 'https://flagcdn.com/ma.svg',
    },
    {
      code: 'MVR',
      name: 'Maldivian rufiyaa',
      flagUrl: 'https://flagcdn.com/mv.svg',
    },
    {
      code: 'MXN',
      name: 'Mexican peso',
      flagUrl: 'https://flagcdn.com/mx.svg',
    },
    {
      code: 'MYR',
      name: 'Malaysian ringgit',
      flagUrl: 'https://flagcdn.com/my.svg',
    },
    {
      code: 'NGN',
      name: 'Nigerian naira',
      flagUrl: 'https://flagcdn.com/ng.svg',
    },
    {
      code: 'NOK',
      name: 'Norwegian krone',
      flagUrl: 'https://flagcdn.com/no.svg',
    },
    {
      code: 'NZD',
      name: 'New Zealand dollar',
      flagUrl: 'https://flagcdn.com/nz.svg',
    },
    {
      code: 'PKR',
      name: 'Pakistani rupee',
      flagUrl: 'https://flagcdn.com/pk.svg',
    },
    {
      code: 'PLN',
      name: 'Polish złoty',
      flagUrl: 'https://flagcdn.com/pl.svg',
    },
    {
      code: 'PYG',
      name: 'Paraguayan guaraní',
      flagUrl: 'https://flagcdn.com/py.svg',
    },
    {
      code: 'QAR',
      name: 'Qatari riyal',
      flagUrl: 'https://flagcdn.com/qa.svg',
    },
    {
      code: 'RSD',
      name: 'Serbian dinar',
      flagUrl: 'https://flagcdn.com/rs.svg',
    },
    {
      code: 'RUB',
      name: 'Russian ruble',
      flagUrl: 'https://flagcdn.com/ru.svg',
    },
    { code: 'SAR', name: 'Saudi riyal', flagUrl: 'https://flagcdn.com/sa.svg' },
    {
      code: 'SEK',
      name: 'Swedish krona',
      flagUrl: 'https://flagcdn.com/se.svg',
    },
    {
      code: 'SGD',
      name: 'Singapore dollar',
      flagUrl: 'https://flagcdn.com/bn.svg',
    },
    {
      code: 'TND',
      name: 'Tunisian dinar',
      flagUrl: 'https://flagcdn.com/tn.svg',
    },
    {
      code: 'TRY',
      name: 'Turkish lira',
      flagUrl: 'https://flagcdn.com/tr.svg',
    },
    {
      code: 'UAH',
      name: 'Ukrainian hryvnia',
      flagUrl: 'https://flagcdn.com/ua.svg',
    },
    {
      code: 'USD',
      name: 'United States dollar',
      flagUrl: 'https://flagcdn.com/us.svg',
    },
    {
      code: 'VES',
      name: 'Venezuelan bolívar soberano',
      flagUrl: 'https://flagcdn.com/ve.svg',
    },
    {
      code: 'ZAR',
      name: 'South African rand',
      flagUrl: 'https://flagcdn.com/za.svg',
    },
  ]

  return (
    <CurrenciesContext.Provider value={{ currencies }}>
      {children}
    </CurrenciesContext.Provider>
  )
}
