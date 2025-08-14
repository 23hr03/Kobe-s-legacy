import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterApp} from './router/RouterApp'
import "./styles/components/imgDefondo.css"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterApp/>
  </StrictMode>,
)