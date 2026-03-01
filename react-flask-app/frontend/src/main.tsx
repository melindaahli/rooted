import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { PlantProvider } from './context/PlantContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PlantProvider>
      <App />
    </PlantProvider>
  </StrictMode>,
)
