import './index.css'
import React from 'react'
import App from './App.tsx'
import Fonts from './components/Fonts'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Fonts />
    <App />
  </React.StrictMode>,
)
