// TEXTOS EN INGLÉS. Mismas claves que es.js; lo que falte se muestra en español.
// "textos": traducciones del contenido (tarjetas, productos, fotos), buscadas por el texto
// exacto en español. Si cambias un texto en español, agrega aquí su nueva traducción.
const en = {
  anuncios: {
    etiqueta: "Announcements",
    mensajes: ["Specialty coffee from Huila", "Shipping across Colombia", "New harvest available"],
  },

  menu: {
    etiqueta: "Main menu",
    irAlInicio: "Canco Café, go to home",
    verSubsecciones: "Show {seccion} subsections",
    inicio: "Home",
    bienvenida: "Welcome",
    experienciaVisual: "Visual Experience",
    legado: "Legacy & Tradition",
    procesos: "Magical processes",
    familia: "The Star family",
    finca: "The farm",
    paraiso: "The Huila paradise",
    aroundTheWorld: "Around The World",
    contacto: "Contact Star",
    telefono: "Phone & location",
    redes: "Social media",
    tienda: "Shop",
  },

  header: {
    buscar: "Search",
    cerrarBusqueda: "Close search",
    buscarPlaceholder: "Search coffee, brewing methods, sizes...",
    buscarEtiqueta: "Search the shop",
    carrito: "Open cart, {cantidad} {unidad}",
    producto: "item",
    productos: "items",
    idioma: "Language: {idioma}. Change language",
    idiomas: "Languages",
  },

  splash: {
    subtitulo: "Coffee heritage · Acevedo, Huila",
    explorar: "Explore",
    pista: "Click anywhere to continue",
  },

  hero: {
    subtitulo: "With all the love of the countryside!",
    boton: "Discover our coffee",
    personaAlt: "Coffee grower from the Canco family walking through the farm's coffee fields",
  },

  reel: {
    etiqueta: "Video of our coffee",
  },

  legado: {
    titulo: "Explore Our Essence",
    leerMas: "Read more",
    sobre: "about {titulo}",
    kicker: "Legacy & tradition",
    probar: "Try our coffee",
    cerrar: "Close",
  },

  atw: {
    kicker: "Canco Star",
    titulo: "Around The World",
    subtitulo: "From the mountains of Huila to cups all over the world",
    ciudades: "cities in Colombia",
    paises: "countries",
    continentes: "continents",
    pestanas: "Canco Café's reach",
    nacional: "National",
    internacional: "International",
    filtrar: "Filter by region",
    todas: "All",
    verGrande: "View larger photo",
    vacio: "We don't have photos from {region} yet. Did you take Canco Café there?",
    estaRegion: "this region",
    compartir: "Share your photo with us",
    regiones: {
      latinoamerica: "Latin America",
      norteamerica: "North America",
      europa: "Europe",
      asia: "Asia",
    },
  },

  lightbox: {
    foto: "Photo",
    fotoEn: "Photo in {lugar}",
    alt: "Canco Café in {lugar}",
    cerrar: "Close",
    anterior: "Previous photo",
    siguiente: "Next photo",
  },

  carrito: {
    titulo: "Your cart",
    cerrar: "Close cart",
    vacio: "Your cart is empty.",
    irATienda: "Go to the shop",
    quitar: "Remove {producto} from cart",
    total: "Total",
    nota: "Online payment will be available very soon.",
  },

  tienda: {
    kicker: "Canco Café Shop",
    titulo: "From Huila to your cup",
    descripcion: "Castillo Tambo specialty coffee and everything you need to brew it at home.",
    categorias: "Shop categories",
    todos: "All",
    resultados: "Results for “{busqueda}”",
    verTodo: "See all",
    sinResultados: "We couldn't find any products for your search.",
    verTienda: "See the whole shop",
  },

  producto: {
    presentacion: "Size",
    precioPorConfirmar: "Price to be confirmed",
    cantidad: "Quantity",
    quitarUnidad: "Remove one",
    agregarUnidad: "Add one",
    agregar: "Add",
    consultarPrecio: "Ask for the price",
  },

  footer: {
    descripcion:
      "We are a coffee company from Acevedo, born into the Canacue-Collazos family. We grow specialty coffee with love and tradition in the mountains of Huila.",
    enlaces: "Links",
    inicio: "Home",
    historia: "Our Story",
    legado: "Legacy & Tradition",
    tienda: "Shop",
    contactoStar: "Contact Star",
    contacto: "Contact",
    ubicacion: "Acevedo, Huila - Colombia",
    abrirMapa: "Open in maps",
    mapaTitulo: "Map of Acevedo, Huila",
    nuevaPestana: "opens in a new tab",
    derechos: "All rights reserved.",
  },

  textos: {
    // Legado y tradición
    "Procesos mágicos": "Magical Processes",
    "Cultivamos nuestras plantas desde semilla, cuidando cada etapa del crecimiento con dedicacion y amor por la tierra, tanto que la magia florece naturalmente.":
      "We grow our plants from seed, caring for every stage of their growth with dedication and love for the land, so much that the magic blooms naturally.",
    "Semilleros de café": "Coffee seedbeds",
    "Todo empieza en el semillero. Allí escogemos las mejores semillas y las acompañamos durante sus primeras semanas, hasta que están listas para llegar a la tierra.":
      "It all begins in the seedbed. There we choose the best seeds and look after them during their first weeks, until they are ready to go into the ground.",
    "Después vienen la siembra, la floración y la cosecha a mano, grano por grano. Cada etapa se hace con paciencia, porque sabemos que de ella depende lo que luego llega a tu taza.":
      "Then come planting, flowering and harvesting by hand, bean by bean. Every stage is done with patience, because we know it shapes what later reaches your cup.",
    "La familia Star": "The Star Family",
    "Familias cafeteras con generaciones de experiencia, llevando la tradicion y berraquera del cafe huilense en cada grano.":
      "Coffee-growing families with generations of experience, carrying the tradition and grit of Huila coffee in every bean.",
    "Familia cafetera trabajando en el cultivo": "Coffee-growing family working in the field",
    "Detrás de cada bolsa de Canco Café hay una familia. El conocimiento del café ha pasado de generación en generación, de los abuelos a los padres y de los padres a los hijos.":
      "Behind every bag of Canco Café there is a family. Coffee know-how has been passed down from generation to generation, from grandparents to parents and from parents to children.",
    "Aquí puedes contar quiénes son, cómo empezó la tradición cafetera de la familia y qué significa para ustedes seguir trabajando la tierra.":
      "Here you can tell who they are, how the family's coffee tradition began and what it means to you to keep working the land.",
    "La Finca": "The Farm",
    "El epicentro mágico y nuestra principal fuente de producción, rodeada de maravillosos paisajes que gritan tradición, naturaleza y vida a los cuatro vientos.":
      "The magical heart of it all and our main source of production, surrounded by wonderful landscapes that shout tradition, nature and life to the four winds.",
    "Cabañas de la finca entre las montañas": "Farm cabins among the mountains",
    "La finca es nuestro hogar y el corazón de Canco Café. Entre sus montañas crecen los cafetales que dan origen a cada grano que llega a tu casa.":
      "The farm is our home and the heart of Canco Café. Among its mountains grow the coffee plants behind every bean that reaches your home.",
    "Aquí puedes contar dónde queda, cómo es un día en la finca y qué la hace especial: su clima, su gente y los paisajes que la rodean.":
      "Here you can tell where it is, what a day on the farm is like and what makes it special: its climate, its people and the landscapes around it.",
    "El Paraiso Huilense": "The Huila Paradise",
    "Paisajes unicos de las montanas del Huila, donde nuestro cafe crece entre valles y neblina.":
      "Unique landscapes in the mountains of Huila, where our coffee grows among valleys and mist.",
    "Montañas del Huila": "Mountains of Huila",
    "El Huila es tierra de café. Sus montañas, sus valles y su neblina le dan al grano un carácter que se reconoce en cada taza.":
      "Huila is coffee land. Its mountains, valleys and mist give the bean a character you can recognize in every cup.",
    "Aquí puedes contar cómo es el paisaje de Acevedo, qué se ve desde la finca y por qué este rincón del Huila es un paraíso para el café.":
      "Here you can tell what the landscape of Acevedo is like, what you can see from the farm and why this corner of Huila is a paradise for coffee.",

    // Tienda
    "Café en grano": "Whole bean coffee",
    "Café molido": "Ground coffee",
    "Métodos de preparación": "Brewing methods",
    "Accesorios": "Accessories",
    "Café en grano Castillo Tambo": "Castillo Tambo whole bean coffee",
    "Café de especialidad de la familia Canacue-Collazos, en Acevedo, Huila. Muélelo en casa justo antes de prepararlo.":
      "Specialty coffee from the Canacue-Collazos family in Acevedo, Huila. Grind it at home right before brewing.",
    "Café molido Castillo Tambo": "Castillo Tambo ground coffee",
    "El mismo café de especialidad del Huila, listo para preparar en tu método favorito.":
      "The same specialty coffee from Huila, ready to brew with your favorite method.",
    "Método V60": "V60 dripper",
    "Cafetera de goteo para preparar una taza limpia que resalta las notas del café.":
      "Pour-over dripper for a clean cup that brings out the coffee's notes.",
    "Prensa francesa": "French press",
    "Preparación sencilla por inmersión, para una taza con más cuerpo.":
      "Simple immersion brewing for a fuller-bodied cup.",
    "Cafetera de vidrio con filtro, ideal para preparar varias tazas y compartir.":
      "Glass coffee maker with a filter, ideal for brewing several cups to share.",
    "Filtros para V60": "V60 filters",
    "Caja de 100 filtros de papel para preparar café en tu V60.": "Box of 100 paper filters for brewing coffee in your V60.",

    // Around The World: países
    Brasil: "Brazil",
    Italia: "Italy",
    México: "Mexico",

    // Around The World: lugares
    "Río de Janeiro": "Rio de Janeiro",
    "Ciudad Blanca, Popayán": "The White City, Popayán",
    Milán: "Milan",
    "Viña del mar, Valparaíso": "Viña del Mar, Valparaíso",
    "Finca Los Pinos, Acevedo-Huila": "Los Pinos Farm, Acevedo, Huila",
    "Robosen, Shanghái": "Robosen, Shanghai",
    "Catedral de La Plata, Buenos Aires": "La Plata Cathedral, Buenos Aires",

    // Around The World: frases
    "Entre cafetales y colores.": "Among coffee fields and colors.",
    "Hasta el más pequeño de la casa lo espera.": "Even the littlest one at home is waiting for it.",
    "A los pies del Cristo Redentor.": "At the feet of Christ the Redeemer.",
    "El café como tesoro colonial": "Coffee as a colonial treasure",
    "Café del Huila en el corazón de la selva.": "Huila coffee in the heart of the jungle.",
    "Café de tierra aceveduna frente al Duomo.": "Coffee from Acevedo soil in front of the Duomo.",
    "Buen café, mágico paisaje.": "Good coffee, magical scenery.",
    "Donde el río suena, hay café.": "Where the river sings, there's coffee.",
    "En la escalera Selarón.": "On the Selarón Steps.",
    "Por estas zona, el café sabe más picante.": "Around here, coffee tastes a little spicier.",
    "En casa.": "At home.",
    "Café futurístico.": "Futuristic coffee.",
    "Catedral+Café=Combinación divina.": "Cathedral + coffee = a divine combination.",
  },
};

export default en;
