import { useState } from 'react'
import './App.css'
import { Head } from './components/head';
import { Contents } from './components/contents';
import { Footer } from './components/footer';
import { SplashScreen } from './components/SplashScreen';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleEnter = () => {
    setShowSplash(false);
  };

  return (
    <>
      {showSplash && <SplashScreen onEnter={handleEnter} />}
      
      <div style={{ display: showSplash ? 'none' : 'block' }}>
        <Head />
        <Contents />
        <Footer />
      </div>
    </>
  );
}

export default App
