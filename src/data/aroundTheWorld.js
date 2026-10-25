// Datos de la sección "Around The World" - edita aquí.
//
// CÓMO AGREGAR UNA FOTO
// 1. Copia la foto en public/Aroundtheworld/ (idealmente de menos de 300 KB).
// 2. Agrega un bloque { ... } a la lista "fotos" de abajo, copiando uno que ya exista:
//    - imagen:    ruta de la foto, empezando por "/Aroundtheworld/"
//    - ciudad:    nombre de la ciudad
//    - pais:      nombre del país
//    - bandera:   el emoji de la bandera (por ejemplo 🇨🇴, 🇲🇽, 🇪🇸, 🇯🇵). Puedes copiarlo de emojipedia.org
//    - categoria: "nacional" (Colombia) o "internacional"
//    - region:    solo para las internacionales: "latinoamerica", "norteamerica", "europa" o "asia"
//    - frase:     (opcional) una frase corta. Si no quieres frase, bórrala o déjala en ""
// El orden de la lista es el orden en que aparecen las fotos.
// Las frases actuales son de ejemplo: cámbialas por las tuyas.

// Regiones del filtro de la pestaña "Internacional" y el continente al que pertenece cada una
export const regiones = [
  { id: "latinoamerica", nombre: "Latinoamérica", continente: "América" },
  { id: "norteamerica", nombre: "Norteamérica", continente: "América" },
  { id: "europa", nombre: "Europa", continente: "Europa" },
  { id: "asia", nombre: "Asia", continente: "Asia" },
];

export const fotos = [
  {
    imagen: "/Aroundtheworld/COL01.png",
    ciudad: "Gigante",
    pais: "Colombia",
    bandera: "🇨🇴",
    categoria: "nacional",
    frase: "Entre cafetales y colores.",
  },
  {
    imagen: "/Aroundtheworld/BOG-COL.jpg",
    ciudad: "Bogotá",
    pais: "Colombia",
    bandera: "🇨🇴",
    categoria: "nacional",
    frase: "Hasta el más pequeño de la casa lo espera.",
  },
  {
    imagen: "/Aroundtheworld/BR01.png",
    ciudad: "Río de Janeiro",
    pais: "Brasil",
    bandera: "🇧🇷",
    categoria: "internacional",
    region: "latinoamerica",
    frase: "A los pies del Cristo Redentor.",
  },
  {
    imagen: "/Aroundtheworld/COL02.png",
    ciudad: "Ciudad Blanca, Popayán",
    pais: "Colombia",
    bandera: "🇨🇴",
    categoria: "nacional",
    frase: "El café como tesoro colonial",
  },
  {
    imagen: "/Aroundtheworld/Amazonas-COL.jpg",
    ciudad: "Leticia, Amazonas",
    pais: "Colombia",
    bandera: "🇨🇴",
    categoria: "nacional",
    frase: "Café del Huila en el corazón de la selva.",
  },
  {
    imagen: "/Aroundtheworld/Italy.jpeg",
    ciudad: "Milán",
    pais: "Italia",
    bandera: "🇮🇹",
    categoria: "internacional",
    region: "europa",
    frase: "Café de tierra aceveduna frente al Duomo.",
  },
  {
    imagen: "/Aroundtheworld/CANCOenchile.jpg",
    ciudad: "Viña del mar, Valparaíso",
    pais: "Chile",
    bandera: "🇨🇱",
    categoria: "internacional",
    region: "latinoamerica",
    frase: "Buen café, mágico paisaje.",
  },
  {
    imagen: "/Aroundtheworld/COL03.png",
    ciudad: "Florencia, Caquetá",
    pais: "Colombia",
    bandera: "🇨🇴",
    categoria: "nacional",
    frase: "Donde el río suena, hay café.",
  },
  {
    imagen: "/Aroundtheworld/BR02.png",
    ciudad: "Río de Janeiro",
    pais: "Brasil",
    bandera: "🇧🇷",
    categoria: "internacional",
    region: "latinoamerica",
    frase: "En la escalera Selarón.",
  
  },
  {
    imagen: "/Aroundtheworld/MXcanco.jpg",
    ciudad: "Guadalajara, Jalisco",
    pais: "México",
    bandera: "🇲🇽", 
    categoria: "internacional",
    region: "latinoamenrica",
    frase: "Por estas zona, el café sabe más picante.",

  },
  {
    imagen: "Aroundtheworld/Cancoenf.pinos.jpg",
    ciudad: "Finca Los Pinos, Acevedo-Huila",
    pais: "Colombia",
    bandera: "🇨🇴",
    categoria: "nacional",
    frase: "En casa."
  },
  {
    imagen: "Aroundtheworld/CNcanco.jpg",
    ciudad: "Robosen, Shanghái",
    pais: "China",
    bandera: "🇨🇳",
    categoria: "internacional",
    region: "asia",
    frase: "Café futurístico."
  },
  {
    imagen: "Aroundtheworld/ARGcanco.jpg",
    ciudad: "Catedral de La Plata, Buenos Aires",
    pais: "Argentina",
    bandera: "🇦🇷",
    categoria: "internacional",
    region: "latinoamerica",
    frase: "Catedral+Café=Combinación divina."
  }
];

// Números de los contadores del encabezado: se calculan solos a partir de las fotos de arriba,
// así que al agregar una foto se actualizan sin tocar nada más.
// - Una ciudad o un país repetido cuenta una sola vez, siempre que esté escrito igual
//   ("Bogotá" y "Bogotá, Cundinamarca" contarían como dos ciudades distintas).
// - Si Canco Café ha llegado a más lugares de los que hay en fotos, puedes reemplazar
//   cualquiera de los tres por un número escrito a mano (por ejemplo: paises: 10,).
const continenteDe = (foto) =>
  foto.categoria === "nacional"
    ? "América"
    : regiones.find((region) => region.id === foto.region)?.continente;

export const alcance = {
  ciudadesColombia: new Set(fotos.filter((foto) => foto.pais === "Colombia").map((foto) => foto.ciudad)).size,
  paises: new Set(fotos.map((foto) => foto.pais)).size,
  continentes: new Set(fotos.map(continenteDe).filter(Boolean)).size,
};
