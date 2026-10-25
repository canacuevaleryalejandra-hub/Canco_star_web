import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Head } from './components/head';
import { Footer } from './components/footer';
import { SplashScreen } from './components/SplashScreen';
import { ScrollToHash } from './components/ScrollToHash';
import { AnnouncementBar } from './components/AnnouncementBar';
import { CartDrawer } from './components/CartDrawer';
import Home from './view/home';
import Tienda from './view/tienda';

// Duración del desvanecido del splash; debe coincidir con la transición de .splash-screen en App.css
const SPLASH_FADE_MS = 800;

function App() {
  // "visible" → "leaving" (la página ya se ve debajo y el splash se desvanece) → "gone"
  const [splash, setSplash] = useState('visible');

  const handleEnter = () => {
    if (splash !== 'visible') return;
    setSplash('leaving');
    setTimeout(() => setSplash('gone'), SPLASH_FADE_MS);
  };

  return (
    <>
      {splash !== 'gone' && <SplashScreen onEnter={handleEnter} leaving={splash === 'leaving'} />}

      <div style={{ display: splash === 'visible' ? 'none' : 'block' }}>
        {/* La barra de anuncios se va con el scroll; el header se queda fijo arriba */}
        <AnnouncementBar />
        <Head />
        {/* Páginas: el header y el footer se comparten, solo cambia lo de aquí */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tienda" element={<Tienda />} />
        </Routes>
        <Footer />
      </div>

      <CartDrawer />
      <ScrollToHash />
    </>
  );
}

export default App
