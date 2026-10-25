import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

// Cada vez que cambia la URL:
// - si trae una sección ("/#legado-y-tradicion"), baja con desplazamiento suave hasta ella
// - si cambia de página ("/" → "/tienda"), empieza desde arriba
// - si solo cambia el filtro de la misma página ("/tienda?categoria=metodos"), no se mueve
export function ScrollToHash() {
  const { pathname, search, hash, key } = useLocation();
  const previous = useRef({ pathname, search });

  useEffect(() => {
    const pathChanged = previous.current.pathname !== pathname;
    const searchChanged = previous.current.search !== search;
    previous.current = { pathname, search };

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!hash) {
      if (pathChanged) {
        window.scrollTo({ top: 0, behavior: "instant" });
      } else if (!searchChanged) {
        // Mismo enlace en la misma página (por ejemplo, el logo estando en el inicio)
        window.scrollTo({ top: 0, behavior: reduceMotion ? "instant" : "smooth" });
      }
      return;
    }

    const section = document.getElementById(decodeURIComponent(hash.slice(1)));
    section?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  }, [pathname, search, hash, key]);

  return null;
}
