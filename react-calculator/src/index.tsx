import * as React from 'react'
import ReactDOM from 'react-dom'
import 'src/index.scss'
import App from 'src/App'
import { ThemeContextProvider } from 'src/contexts/ThemeContext'
import { I18nextProvider } from 'react-i18next'
import i18n from 'src/locales/i18n'
import { StoreContextProvider } from 'src/contexts/StoreContext'

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <I18nextProvider i18n={i18n}>
        <StoreContextProvider>
          <App />
        </StoreContextProvider>
      </I18nextProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
