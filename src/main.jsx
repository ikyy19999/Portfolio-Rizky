import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'lenis/dist/lenis.css'
import { LanguageProvider } from './context/LanguageContext.jsx'
import { initMotionPreference } from './lib/motionPreference'

// Runs before the first render so the saved choice is applied without a flash.
initMotionPreference()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>,
)