import * as React from 'react'
import ReactDOM from 'react-dom'
import 'src/index.scss'
import App from 'src/App'
import { ThemeContextProvider } from 'src/contexts/ThemeContext'

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
