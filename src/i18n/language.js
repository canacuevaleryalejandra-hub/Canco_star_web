import { createContext, useContext } from "react";
import es from "./es";
import en from "./en";
import pt from "./pt";
import zh from "./zh";

// Idiomas del selector del header, en el orden en que aparecen.
// "codigo" va en <html lang>; "corto" es lo que se ve junto al globo.
export const idiomas = [
  { id: "es", nombre: "Español", corto: "ES", codigo: "es" },
  { id: "en", nombre: "English", corto: "EN", codigo: "en" },
  { id: "pt", nombre: "Português", corto: "PT", codigo: "pt-BR" },
  { id: "zh", nombre: "中文", corto: "中文", codigo: "zh-CN" },
];

export const diccionarios = { es, en, pt, zh };

// Busca "cards.items.finca.title" dentro de un diccionario
function buscar(diccionario, ruta) {
  return ruta.split(".").reduce((valor, parte) => (valor == null ? undefined : valor[parte]), diccionario);
}

// Reemplaza {nombre} por su valor: "Quitar {producto}" + { producto: "Chemex" } → "Quitar Chemex"
function rellenar(texto, valores) {
  if (typeof texto !== "string" || !valores) return texto;
  return texto.replace(/\{(\w+)\}/g, (_, clave) => (valores[clave] ?? `{${clave}}`));
}

// Crea la función t() de un idioma. Si una traducción no existe, usa la del español,
// y si tampoco existe, el texto de respaldo (o la ruta, para notar que falta).
export function crearTraductor(idioma) {
  const t = (ruta, valores, respaldo) => {
    const valor = buscar(diccionarios[idioma], ruta) ?? buscar(es, ruta) ?? respaldo ?? ruta;
    return rellenar(valor, valores);
  };
  // Para el contenido escrito en español en sus propios archivos (tarjetas, productos, fotos):
  // la traducción se busca por el mismo texto en español en la sección "textos" del idioma.
  // Ej.: t.texto("México") → "Mexico". Si no está, se muestra el original: así, si cambias un
  // texto en español, los otros idiomas muestran el texto nuevo (en español) hasta que lo
  // traduzcas, en vez de una traducción vieja que ya no corresponde.
  t.texto = (original) => {
    if (!original) return original;
    return diccionarios[idioma].textos?.[original] ?? original;
  };
  return t;
}

export const LanguageContext = createContext(null);

// En cualquier componente: const { t, idioma, setIdioma } = useLanguage();
export function useLanguage() {
  return useContext(LanguageContext);
}
