import React from 'react'
import { render } from 'react-dom'
import App from './App'
import * as worker from './service-worker'

worker.unregister()

const root = document.getElementById('root')

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
)
