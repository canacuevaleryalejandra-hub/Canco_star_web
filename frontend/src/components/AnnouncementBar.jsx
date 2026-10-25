import { useEffect, useState } from "react";
import { useLanguage } from "../i18n/language";

// Los mensajes se editan en src/i18n (anuncios.mensajes de cada idioma). Rotan cada 4 segundos.
const INTERVAL_MS = 4000;

export function AnnouncementBar() {
  const { t } = useLanguage();
  const messages = t("anuncios.mensajes");
  const [index, setIndex] = useState(0);
  // Se pausa mientras el mouse está encima, para alcanzar a leer el mensaje
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % messages.length);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, [paused, messages.length]);

  return (
    <aside
      className="announcement-bar"
      aria-label={t("anuncios.etiqueta")}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* "key" cambia con cada mensaje: React crea un <p> nuevo y se repite la animación de entrada */}
      <p key={index} className="announcement-text">
        {messages[index % messages.length]}
      </p>
    </aside>
  );
}
