import { createContext, useContext } from "react";
import { useLanguage } from "./language";

// Moneda que se muestra en cada idioma. Los precios del sitio están en pesos colombianos (COP),
// que es como se cobra; en los otros idiomas se muestra su equivalente aproximado.
// "formato" es el idioma con que se escribe el número (37.000 en es-CO; 11.62 en en-US).
export const monedas = {
  es: { codigo: "COP", formato: "es-CO", decimales: 0 },
  en: { codigo: "USD", formato: "en-US", decimales: 2 },
  pt: { codigo: "BRL", formato: "pt-BR", decimales: 2 },
  zh: { codigo: "CNY", formato: "zh-CN", decimales: 2 },
};

// Tasas de respaldo: cuántas unidades de cada moneda vale 1 peso colombiano.
// Se usan solo si todavía no se pudieron descargar las del día (por ejemplo, sin internet).
// Tomadas de ExchangeRate-API el 25 de octubre de 2026.
export const TASAS_RESPALDO = {
  fecha: "2026-10-25T00:02:31Z",
  tasas: { COP: 1, USD: 0.000314, BRL: 0.001581, CNY: 0.002103 },
};

// De dónde salen las tasas del día (gratis y sin clave; se actualiza una vez al día).
// Sus condiciones de uso piden mostrar un enlace a ellos: está en el carrito y en la tienda.
export const FUENTE_TASAS = {
  url: "https://open.er-api.com/v6/latest/COP",
  nombre: "ExchangeRate-API",
  enlace: "https://www.exchangerate-api.com",
};

export const CurrencyContext = createContext(TASAS_RESPALDO);

const pesos = new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 });

// En cualquier componente: const { precio, enPesos, esAproximado } = usePrecio();
// precio(37000)  → "$ 37.000" en español, "$11.62 USD" en inglés, "R$ 58,50 BRL" en portugués...
// enPesos(37000) → "$ 37.000 COP" (el precio real, el que se cobra)
export function usePrecio() {
  const { idioma } = useLanguage();
  const { tasas } = useContext(CurrencyContext);
  const moneda = monedas[idioma] ?? monedas.es;
  const tasa = tasas[moneda.codigo];
  // Si por alguna razón no hay tasa para esa moneda, se muestra en pesos
  const esAproximado = moneda.codigo !== "COP" && tasa != null;

  const formato = new Intl.NumberFormat(moneda.formato, {
    style: "currency",
    currency: moneda.codigo,
    currencyDisplay: "narrowSymbol",
    minimumFractionDigits: moneda.decimales,
    maximumFractionDigits: moneda.decimales,
  });

  const enPesos = (cop) => `${pesos.format(cop)} COP`;
  // El código al final ("USD") evita confundir el "$" del dólar con el del peso
  const precio = (cop) => (esAproximado ? `${formato.format(cop * tasa)} ${moneda.codigo}` : pesos.format(cop));

  return { precio, enPesos, esAproximado, codigo: esAproximado ? moneda.codigo : "COP" };
}
