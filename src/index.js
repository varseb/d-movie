import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from 'App'
import root from 'root'

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  root
)

setTimeout(() => root.classList.add('ready'), 1500)
