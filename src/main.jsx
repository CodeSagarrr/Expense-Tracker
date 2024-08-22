import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ExpenceProvider} from './ExpenceContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ExpenceProvider>
    <App />
    </ExpenceProvider>
  </StrictMode>,
)
