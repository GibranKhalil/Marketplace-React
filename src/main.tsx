import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.scss'
import { AppRoutes } from './routes'
import { store } from './store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  </React.StrictMode>,
)
