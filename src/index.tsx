import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './app'
import { Provider } from 'react-redux'
import { setupStore } from './store/store'
import './styles/global.scss'

const container = document.getElementById('root')!
const root = createRoot(container)
const store = setupStore()

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
