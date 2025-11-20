import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import AppRouter from "./router";
import AppRouter from './components/router.jsx'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AppRouter />
  </StrictMode>,
)
