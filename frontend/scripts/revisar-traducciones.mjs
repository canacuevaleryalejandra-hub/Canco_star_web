// Revisa las traducciones del sitio y dice qué falta en cada idioma.
// Se usa desde la carpeta frontend/:   npm run traducciones
//
// Revisa dos cosas:
// 1. Textos de la interfaz (src/i18n/es.js): cada clave del español debe existir en los otros
//    idiomas, con el mismo tipo (texto o lista) y, si es una lista, con la misma cantidad.
// 2. Contenido escrito en español (src/data): tarjetas de Legado, productos y fotos de
//    Around The World. Cada texto debe tener su traducción en la sección "textos" de cada idioma.
//
// También avisa de las traducciones que sobran en "textos" (de textos en español que ya no existen,
// por ejemplo porque los cambiaste): se pueden borrar.
//
// Si un texto se escribe igual en otro idioma (un nombre propio como "Gigante" o "Chemex"), agrégalo
// en "textos" con el mismo valor, o en IGUALES (abajo), para que deje de aparecer como faltante.

import es from "../src/i18n/es.js";
import en from "../src/i18n/en.js";
import pt from "../src/i18n/pt.js";
import zh from "../src/i18n/zh.js";
import { cardsData } from "../src/data/legado.js";
import { categorias, productos } from "../src/data/productos.js";
import { fotos } from "../src/data/aroundTheWorld.js";

const idiomas = { en, pt, zh };
const nombres = { en: "inglés (en.js)", pt: "portugués (pt.js)", zh: "chino (zh.js)" };

// Textos que se escriben igual en todos los idiomas: no necesitan traducción
const IGUALES = new Set(["Chemex"]);

// ---- 1. Claves de la interfaz ----
function aplanar(objeto, prefijo = "") {
  const claves = {};
  for (const [clave, valor] of Object.entries(objeto)) {
    if (clave === "textos") continue;
    const ruta = prefijo ? `${prefijo}.${clave}` : clave;
    if (valor && typeof valor === "object" && !Array.isArray(valor)) Object.assign(claves, aplanar(valor, ruta));
    else claves[ruta] = valor;
  }
  return claves;
}

// ---- 2. Contenido en español ----
// [texto, dónde está] para poder decir de qué archivo sale cada uno
const contenido = [];
const agregar = (texto, donde) => texto && contenido.push([texto, donde]);
for (const card of cardsData) {
  const donde = `legado.js · tarjeta "${card.slug}"`;
  agregar(card.title, donde);
  agregar(card.description, donde);
  agregar(card.detailImageAlt, donde);
  card.detail.forEach((parrafo) => agregar(parrafo, donde));
}
for (const c of categorias) agregar(c.nombre, "productos.js · categoría");
for (const p of productos) {
  agregar(p.nombre, `productos.js · "${p.id}"`);
  agregar(p.descripcion, `productos.js · "${p.id}"`);
}
for (const f of fotos) {
  const donde = `aroundTheWorld.js · ${f.imagen}`;
  agregar(f.ciudad, donde);
  agregar(f.pais, donde);
  agregar(f.frase, donde);
}
const textosEspañol = new Set(contenido.map(([texto]) => texto));

// ---- Revisión ----
const base = aplanar(es);
let pendientes = 0;
const corto = (texto) => (texto.length > 90 ? texto.slice(0, 87) + "..." : texto);

for (const [id, dic] of Object.entries(idiomas)) {
  const propias = aplanar(dic);
  const faltanClaves = [];
  for (const [ruta, valor] of Object.entries(base)) {
    const suyo = propias[ruta];
    if (suyo === undefined) faltanClaves.push(`${ruta}  (en español: "${corto(String(valor))}")`);
    else if (Array.isArray(valor) && (!Array.isArray(suyo) || suyo.length !== valor.length))
      faltanClaves.push(`${ruta}  (debe ser una lista de ${valor.length})`);
  }

  const textos = dic.textos ?? {};
  const vistos = new Set();
  const faltanTextos = [];
  for (const [texto, donde] of contenido) {
    if (vistos.has(texto) || IGUALES.has(texto)) continue;
    vistos.add(texto);
    if (!(texto in textos)) faltanTextos.push(`"${corto(texto)}"\n      ↳ ${donde}`);
  }
  const sobran = Object.keys(textos).filter((texto) => !textosEspañol.has(texto));

  console.log(`\n━━━ ${nombres[id]} ━━━`);
  if (!faltanClaves.length && !faltanTextos.length && !sobran.length) {
    console.log("  ✓ Todo traducido.");
    continue;
  }
  if (faltanClaves.length) {
    console.log(`\n  Faltan ${faltanClaves.length} textos de la interfaz:`);
    faltanClaves.forEach((linea) => console.log(`    • ${linea}`));
  }
  if (faltanTextos.length) {
    console.log(`\n  Falta traducir ${faltanTextos.length} textos de contenido (agrégalos en "textos"):`);
    faltanTextos.forEach((linea) => console.log(`    • ${linea}`));
  }
  if (sobran.length) {
    console.log(`\n  Sobran ${sobran.length} traducciones viejas en "textos" (se pueden borrar):`);
    sobran.forEach((texto) => console.log(`    • "${corto(texto)}"`));
  }
  pendientes += faltanClaves.length + faltanTextos.length;
}

console.log(
  pendientes
    ? `\n${pendientes} traducciones pendientes. Mientras falten, en esos idiomas se ve el texto en español.\n`
    : "\n✓ No falta ninguna traducción.\n"
);
