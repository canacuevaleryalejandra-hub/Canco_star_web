// Pantalla de bienvenida. Al hacer clic, App.jsx muestra la página debajo y
// "leaving" activa el desvanecido (.splash-screen.fade-out en App.css).
import { useLanguage } from "../i18n/language";

export function SplashScreen({ onEnter, leaving }) {
  const { t } = useLanguage();
  return (
    <div className={leaving ? "splash-screen fade-out" : "splash-screen"} onClick={onEnter}>
      <div className="splash-content">
        <img className="splash-logo" src="/CANCO STAR.jpeg" alt="" />
        {/* Mismo nombre y estilo que el título del inicio, para que el paso se sienta continuo */}
        <h1 className="splash-title">Canco Star</h1>
        <p className="splash-subtitle">{t("splash.subtitulo")}</p>
        <button type="button" className="btn-gold splash-enter-btn" onClick={onEnter}>
          {t("splash.explorar")}
        </button>
      </div>
      <p className="splash-hint">{t("splash.pista")}</p>
    </div>
  );
}
