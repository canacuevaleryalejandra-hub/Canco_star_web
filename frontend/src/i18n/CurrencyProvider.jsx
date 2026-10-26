import { useEffect, useState } from "react";
import { CurrencyContext, FUENTE_TASAS, TASAS_RESPALDO } from "./moneda";

const STORAGE_KEY = "canco-tasas";
// Las tasas se vuelven a descargar si las guardadas tienen más de 12 horas
const VIGENCIA_MS = 12 * 60 * 60 * 1000;

function tasasGuardadas() {
  try {
    const guardadas = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (guardadas?.tasas?.USD) return guardadas;
  } catch {
    // Sin almacenamiento o con datos dañados: se usan las de respaldo
  }
  return null;
}

// Descarga las tasas de cambio del día (una vez cada 12 horas como máximo) y las comparte
// con toda la página. Mientras tanto, o si no hay internet, usa las guardadas o las de respaldo.
export function CurrencyProvider({ children }) {
  const [datos, setDatos] = useState(() => tasasGuardadas() ?? TASAS_RESPALDO);

  useEffect(() => {
    const guardadas = tasasGuardadas();
    if (guardadas && Date.now() - guardadas.descargadas < VIGENCIA_MS) return;

    const control = new AbortController();
    fetch(FUENTE_TASAS.url, { signal: control.signal })
      .then((respuesta) => respuesta.json())
      .then((json) => {
        if (json.result !== "success") return;
        const { COP, USD, BRL, CNY } = json.rates;
        const nuevas = {
          fecha: new Date(json.time_last_update_unix * 1000).toISOString(),
          descargadas: Date.now(),
          tasas: { COP, USD, BRL, CNY },
        };
        setDatos(nuevas);
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(nuevas));
        } catch {
          // Sin almacenamiento: se vuelven a descargar en la próxima visita
        }
      })
      .catch(() => {
        // Sin internet o la API no respondió: se siguen usando las tasas que ya había
      });
    return () => control.abort();
  }, []);

  return <CurrencyContext.Provider value={datos}>{children}</CurrencyContext.Provider>;
}
