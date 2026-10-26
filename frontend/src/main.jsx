import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// Fuentes del sitio, incluidas en el proyecto (no se descargan de Google Fonts):
// Montserrat para títulos, menú y botones; Inter para los párrafos
import '@fontsource-variable/montserrat'
import '@fontsource-variable/inter'
import { polyfillCountryFlagEmojis } from 'country-flag-emoji-polyfill'
import flagsFontUrl from 'country-flag-emoji-polyfill/dist/TwemojiCountryFlags.woff2?url'
import { CartProvider } from './context/CartProvider.jsx'
import { LanguageProvider } from './i18n/LanguageProvider.jsx'
import { CurrencyProvider } from './i18n/CurrencyProvider.jsx'
import App from './App.jsx'

// Windows no dibuja los emojis de banderas (muestra "CO" en vez de 🇨🇴).
// Esto revisa si el navegador puede dibujarlas y, si no, carga una fuente con banderas.
polyfillCountryFlagEmojis('Twemoji Country Flags', flagsFontUrl)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* Idioma del sitio (español, inglés, portugués o chino): ver src/i18n */}
      <LanguageProvider>
        {/* Tasas de cambio para mostrar los precios en la moneda de cada idioma: ver src/i18n/moneda.js */}
        <CurrencyProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CurrencyProvider>
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>,
)
