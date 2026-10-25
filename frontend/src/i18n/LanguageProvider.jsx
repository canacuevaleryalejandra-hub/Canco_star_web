import { useEffect, useMemo, useState } from "react";
import { LanguageContext, crearTraductor, idiomas } from "./language";

const STORAGE_KEY = "canco-idioma";

// Idioma inicial: el que la persona eligió antes; si es su primera visita, el de su
// navegador (si es uno de los cuatro); si no, español.
function idiomaInicial() {
  try {
    const guardado = localStorage.getItem(STORAGE_KEY);
    if (idiomas.some((i) => i.id === guardado)) return guardado;
  } catch {
    // Sin almacenamiento disponible: se sigue con el idioma del navegador
  }
  const delNavegador = (navigator.language || "es").slice(0, 2).toLowerCase();
  return idiomas.some((i) => i.id === delNavegador) ? delNavegador : "es";
}

// Guarda el idioma del sitio y lo comparte con todos los componentes
export function LanguageProvider({ children }) {
  const [idioma, setIdioma] = useState(idiomaInicial);

  useEffect(() => {
    // <html lang="..."> le dice al navegador y a los lectores de pantalla en qué idioma está la página
    document.documentElement.lang = idiomas.find((i) => i.id === idioma).codigo;
    try {
      localStorage.setItem(STORAGE_KEY, idioma);
    } catch {
      // Sin almacenamiento disponible: el idioma dura hasta recargar la página
    }
  }, [idioma]);

  const value = useMemo(() => ({ idioma, setIdioma, t: crearTraductor(idioma) }), [idioma]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
