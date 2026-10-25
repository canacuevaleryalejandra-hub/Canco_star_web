// Tarjetas de "Legado y tradición" - edita aquí su contenido (en español).
// Sus traducciones están en src/i18n/en.js, pt.js y zh.js (sección "textos"), buscadas por el
// texto exacto en español: si cambias un texto aquí, agrega allí su nueva traducción.
// "slug" es el id de la tarjeta: el menú del header la enlaza con "/#slug"
//
// Al hacer clic en una tarjeta se abre una ventana ampliada con:
// - detailImage / detailImageAlt: la foto grande de la ventana.
//   ⚠️ FOTOS TEMPORALES: reemplázalas por las definitivas (ponlas en public/ y cambia la ruta).
//   Las actuales pesan ~1,6 MB cada una; idealmente usa fotos de menos de 300 KB.
// - detail: los párrafos del texto largo (uno por cada "texto" de la lista).
//   ⚠️ TEXTO DE EJEMPLO: reemplázalo por la historia real de cada sección.
export const cardsData = [
  {
    id: 1,
    slug: "procesos",
    title: "Procesos mágicos",
    image: "./Flores_star.jpeg",
    description: "Cultivamos y cuidamos nuestras plantas desde la semilla, cuidando cada etapa del crecimiento con dedicacion y amor por la tierra, tanto que la magia florece naturalmente.",
    // FOTO TEMPORAL
    detailImage: "/secadero.jpg",
    detailImageAlt: "Semilleros de café",
    // TEXTO DE EJEMPLO
    detail: [
      "Todo empieza en el semillero. Allí escogemos las mejores semillas y las acompañamos durante sus primeras semanas, hasta que están listas para las siguientes fases.",
      "Después de la siembra y la floración, viene la cosecha a mano, grano por grano. Cada etapa se hace con paciencia, porque sabemos que de ella depende lo que luego llega a tu taza.",
    ],
  },
  {
    id: 2,
    slug: "familia",
    title: "La familia Star",
    image: "./La Fincaaa.png",
    description: "Familias cafeteras con generaciones de experiencia, llevando la tradicion y berraquera del cafe huilense en cada grano.",
    // FOTO TEMPORAL
    detailImage: "/StarFamily02.png",
    detailImageAlt: "Familia cafetera trabajando en el cultivo",
    // TEXTO DE EJEMPLO
    detail: [
      "Detrás de Canco Café hay una familia soñadora. El conocimiento del café ha pasado de generación en generación, de los abuelos a los padres y de los padres a los hijos. Somos CANCO, somos familia, somos comunidad.",
    ],
  },
  {
    id: 3,
    slug: "finca",
    title: "La Finca",
    image: "./Doggy.jpeg",
    description: "El epicentro mágico y nuestra principal fuente de producción, rodeada de maravillosos paisajes que gritan tradición, naturaleza y vida a los cuatro vientos.",
    // FOTO TEMPORAL
    detailImage: "/F.Pinos.jpg",
    detailImageAlt: "Cabañas de la finca entre las montañas",
    // TEXTO DE EJEMPLO
    detail: [
      "La finca es el hogar y corazón de Canco Star. Entre sus montañas crecen los cafetales que dan origen a cada grano que llega a tu casa.",
      "Aquí puedes contar dónde queda, cómo es un día en la finca y qué la hace especial: su clima, su gente y los paisajes que la rodean.",
    ],
  },
  {
    id: 4,
    slug: "paraiso",
    title: "El Paraiso Huilense",
    image: "./campo.jpeg",
    description: "Paisajes unicos de las montanas del Huila, donde nuestro cafe crece entre valles y neblina.",
    // FOTO TEMPORAL (por ahora es la misma de la tarjeta)
    detailImage: "/Paradise.png",
    detailImageAlt: "Montañas del Huila",
    // TEXTO DE EJEMPLO
    detail: [
      "El Huila es tierra de café. Sus montañas, sus valles y su neblina le dan al grano un carácter que se reconoce en cada taza.",
      "Aquí puedes descubrir cómo es el paisaje de Acevedo, qué se ve desde la finca y por qué este rincón del Huila es una octava maravilla del mundo.",
    ],
  },
];
