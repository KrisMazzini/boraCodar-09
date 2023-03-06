import { ThemeProvider } from 'styled-components'
import { CurrenciesContextProvider } from './contexts/CurrenciesContext'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

import { Home } from './pages/Home'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CurrenciesContextProvider>
        <Home />
        <GlobalStyle />
      </CurrenciesContextProvider>
    </ThemeProvider>
  )
}
