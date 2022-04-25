import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { AuthContextProvider } from './components/context/Authcontext'
import { CountContextProvider } from './components/context/count'
import { TotalEmProvider } from './components/context/TotalEm'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthContextProvider>
    <TotalEmProvider>
      <CountContextProvider>
      <App />
      </CountContextProvider>
    </TotalEmProvider>
    </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
