export function SplashScreen({ onEnter }) {
  return (
    <div className="splash-screen" onClick={onEnter}>
      <img 
        className="splash-logo" 
        src="/CANCO STAR.jpeg" 
        alt="CANCO STAR Logo" 
      />
      <h1 className="splash-title">CANCO STAR</h1>
      <p className="splash-subtitle">Cafe de origen - Huila, Colombia</p>
      <button className="splash-enter-btn" onClick={onEnter}>
        EXPLORAR
      </button>
      <p className="splash-hint">Haz clic en cualquier lugar para continuar</p>
    </div>
  );
}
