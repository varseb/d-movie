import { StrictMode } from 'react'
import { render } from 'react-dom'
import App from 'App'
import root from 'root'

render(
  <StrictMode>
    <App />
  </StrictMode>,
  root
)

setTimeout(() => root.classList.add('ready'), 1500)
