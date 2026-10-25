// TEXTOS EN CHINO (mandarín, caracteres simplificados). Mismas claves que es.js; lo que falte
// se muestra en español.
// "textos": traducciones del contenido (tarjetas, productos, fotos), buscadas por el texto
// exacto en español. Si cambias un texto en español, agrega aquí su nueva traducción.
const zh = {
  anuncios: {
    etiqueta: "公告",
    mensajes: ["来自乌伊拉的精品咖啡", "哥伦比亚全国配送", "新一季咖啡豆现已上市"],
  },

  menu: {
    etiqueta: "主菜单",
    irAlInicio: "Canco Café，返回首页",
    verSubsecciones: "查看“{seccion}”的子栏目",
    inicio: "首页",
    bienvenida: "欢迎",
    experienciaVisual: "视觉体验",
    legado: "传承与传统",
    procesos: "神奇的工序",
    familia: "Star 家族",
    finca: "庄园",
    paraiso: "乌伊拉的天堂",
    aroundTheWorld: "Around The World",
    contacto: "联系 Star",
    telefono: "电话与地址",
    redes: "社交媒体",
    tienda: "商店",
  },

  header: {
    buscar: "搜索",
    cerrarBusqueda: "关闭搜索",
    buscarPlaceholder: "搜索咖啡、冲煮方式、规格……",
    buscarEtiqueta: "在商店中搜索",
    carrito: "打开购物车，共 {cantidad} {unidad}",
    producto: "件商品",
    productos: "件商品",
    idioma: "语言：{idioma}。切换语言",
    idiomas: "语言",
  },

  splash: {
    subtitulo: "咖啡世家 · 阿塞韦多，乌伊拉",
    explorar: "探索",
    pista: "点击任意位置继续",
  },

  hero: {
    subtitulo: "饱含乡野的全部爱意！",
    boton: "了解我们的咖啡",
    personaAlt: "Canco 家族的咖啡农走在庄园的咖啡田间",
  },

  reel: {
    etiqueta: "我们咖啡的视频",
  },

  legado: {
    titulo: "探索我们的本质",
    leerMas: "阅读更多",
    sobre: "关于{titulo}",
    kicker: "传承与传统",
    probar: "品尝我们的咖啡",
    cerrar: "关闭",
  },

  atw: {
    kicker: "Canco Star",
    titulo: "Around The World",
    subtitulo: "从乌伊拉的群山，到世界各地的咖啡杯",
    ciudades: "个哥伦比亚城市",
    paises: "个国家",
    continentes: "个大洲",
    pestanas: "Canco Café 的足迹",
    nacional: "国内",
    internacional: "国际",
    filtrar: "按地区筛选",
    todas: "全部",
    verGrande: "查看大图",
    vacio: "我们还没有来自{region}的照片。你把 Canco Café 带到那里了吗？",
    estaRegion: "这个地区",
    compartir: "与我们分享你的照片",
    regiones: {
      latinoamerica: "拉丁美洲",
      norteamerica: "北美洲",
      europa: "欧洲",
      asia: "亚洲",
    },
  },

  lightbox: {
    foto: "照片",
    fotoEn: "摄于{lugar}的照片",
    alt: "Canco Café 在{lugar}",
    cerrar: "关闭",
    anterior: "上一张",
    siguiente: "下一张",
  },

  carrito: {
    titulo: "你的购物车",
    cerrar: "关闭购物车",
    vacio: "你的购物车是空的。",
    irATienda: "去商店看看",
    quitar: "从购物车中移除{producto}",
    total: "合计",
    nota: "在线支付即将开通。",
  },

  tienda: {
    kicker: "Canco Café 商店",
    titulo: "从乌伊拉到你的杯中",
    descripcion: "Castillo Tambo 精品咖啡，以及在家冲煮所需的一切。",
    categorias: "商店分类",
    todos: "全部",
    resultados: "“{busqueda}”的搜索结果",
    verTodo: "查看全部",
    sinResultados: "没有找到符合搜索条件的商品。",
    verTienda: "查看全部商品",
  },

  producto: {
    presentacion: "规格",
    precioPorConfirmar: "价格待定",
    cantidad: "数量",
    quitarUnidad: "减少一件",
    agregarUnidad: "增加一件",
    agregar: "加入购物车",
    consultarPrecio: "咨询价格",
  },

  footer: {
    descripcion:
      "我们是一家来自阿塞韦多的咖啡企业，诞生于 Canacue-Collazos 家族。我们在乌伊拉的群山间，用爱与传统种植精品咖啡。",
    enlaces: "链接",
    inicio: "首页",
    historia: "我们的故事",
    legado: "传承与传统",
    tienda: "商店",
    contactoStar: "联系 Star",
    contacto: "联系方式",
    ubicacion: "哥伦比亚，乌伊拉，阿塞韦多",
    abrirMapa: "在地图中打开",
    mapaTitulo: "乌伊拉阿塞韦多地图",
    nuevaPestana: "在新标签页中打开",
    derechos: "保留所有权利。",
  },

  textos: {
    // Legado y tradición
    "Procesos mágicos": "神奇的工序",
    "Cultivamos nuestras plantas desde semilla, cuidando cada etapa del crecimiento con dedicacion y amor por la tierra, tanto que la magia florece naturalmente.":
      "我们从种子开始培育咖啡树，用心与对土地的热爱呵护每一个生长阶段，让奇迹自然绽放。",
    "Semilleros de café": "咖啡育苗圃",
    "Todo empieza en el semillero. Allí escogemos las mejores semillas y las acompañamos durante sus primeras semanas, hasta que están listas para llegar a la tierra.":
      "一切从育苗圃开始。我们在那里挑选最好的种子，陪伴它们度过最初的几周，直到它们可以移栽到土地中。",
    "Después vienen la siembra, la floración y la cosecha a mano, grano por grano. Cada etapa se hace con paciencia, porque sabemos que de ella depende lo que luego llega a tu taza.":
      "接下来是种植、开花，以及一粒一粒的手工采收。每个环节都耐心完成，因为我们知道，这决定了最终来到你杯中的味道。",
    "La familia Star": "Star 家族",
    "Familias cafeteras con generaciones de experiencia, llevando la tradicion y berraquera del cafe huilense en cada grano.":
      "世代经营咖啡的家族，将乌伊拉咖啡的传统与坚韧注入每一粒咖啡豆。",
    "Familia cafetera trabajando en el cultivo": "在咖啡田里劳作的咖啡农家庭",
    "Detrás de cada bolsa de Canco Café hay una familia. El conocimiento del café ha pasado de generación en generación, de los abuelos a los padres y de los padres a los hijos.":
      "每一袋 Canco Café 的背后都有一个家庭。关于咖啡的知识代代相传，从祖父母传给父母，再从父母传给子女。",
    "Aquí puedes contar quiénes son, cómo empezó la tradición cafetera de la familia y qué significa para ustedes seguir trabajando la tierra.":
      "在这里可以讲述他们是谁、家族的咖啡传统如何开始，以及继续耕耘这片土地对你们意味着什么。",
    "La Finca": "庄园",
    "El epicentro mágico y nuestra principal fuente de producción, rodeada de maravillosos paisajes que gritan tradición, naturaleza y vida a los cuatro vientos.":
      "这里是一切神奇的中心，也是我们主要的产地，四周美景环绕，处处洋溢着传统、自然与生命的气息。",
    "Cabañas de la finca entre las montañas": "群山之间的庄园小屋",
    "La finca es nuestro hogar y el corazón de Canco Café. Entre sus montañas crecen los cafetales que dan origen a cada grano que llega a tu casa.":
      "庄园是我们的家，也是 Canco Café 的心脏。在它的群山之间，生长着孕育每一粒咖啡豆的咖啡树。",
    "Aquí puedes contar dónde queda, cómo es un día en la finca y qué la hace especial: su clima, su gente y los paisajes que la rodean.":
      "在这里可以讲述庄园位于何处、庄园里的一天是什么样子，以及它的独特之处：气候、人们和周围的风景。",
    "El Paraiso Huilense": "乌伊拉的天堂",
    "Paisajes unicos de las montanas del Huila, donde nuestro cafe crece entre valles y neblina.":
      "乌伊拉群山中独一无二的风景，我们的咖啡在山谷与薄雾之间生长。",
    "Montañas del Huila": "乌伊拉的群山",
    "El Huila es tierra de café. Sus montañas, sus valles y su neblina le dan al grano un carácter que se reconoce en cada taza.":
      "乌伊拉是咖啡的故乡。这里的山峦、河谷与薄雾赋予咖啡豆独特的个性，在每一杯中都能品味出来。",
    "Aquí puedes contar cómo es el paisaje de Acevedo, qué se ve desde la finca y por qué este rincón del Huila es un paraíso para el café.":
      "在这里可以讲述阿塞韦多的风景、从庄园能看到什么，以及为什么乌伊拉的这一角是咖啡的天堂。",

    // Tienda
    "Café en grano": "咖啡豆",
    "Café molido": "咖啡粉",
    "Métodos de preparación": "冲煮器具",
    "Accesorios": "配件",
    "Café en grano Castillo Tambo": "Castillo Tambo 咖啡豆",
    "Café de especialidad de la familia Canacue-Collazos, en Acevedo, Huila. Muélelo en casa justo antes de prepararlo.":
      "来自乌伊拉阿塞韦多 Canacue-Collazos 家族的精品咖啡。建议在家冲煮前现磨。",
    "Café molido Castillo Tambo": "Castillo Tambo 咖啡粉",
    "El mismo café de especialidad del Huila, listo para preparar en tu método favorito.":
      "同样的乌伊拉精品咖啡，已研磨好，可用你喜爱的方式冲煮。",
    "Método V60": "V60 滤杯",
    "Cafetera de goteo para preparar una taza limpia que resalta las notas del café.":
      "手冲滤杯，冲出干净的一杯，凸显咖啡的风味层次。",
    "Prensa francesa": "法压壶",
    "Preparación sencilla por inmersión, para una taza con más cuerpo.": "简单的浸泡式冲煮，口感更加醇厚。",
    "Chemex": "Chemex 咖啡壶",
    "Cafetera de vidrio con filtro, ideal para preparar varias tazas y compartir.":
      "带滤纸的玻璃咖啡壶，适合一次冲煮多杯与人分享。",
    "Filtros para V60": "V60 滤纸",
    "Caja de 100 filtros de papel para preparar café en tu V60.": "一盒 100 张，用于 V60 滤杯冲煮咖啡的滤纸。",

    // Around The World: países
    Colombia: "哥伦比亚",
    Brasil: "巴西",
    Italia: "意大利",
    Chile: "智利",
    México: "墨西哥",
    China: "中国",
    Argentina: "阿根廷",

    // Around The World: lugares
    Gigante: "希甘特",
    Bogotá: "波哥大",
    "Río de Janeiro": "里约热内卢",
    "Ciudad Blanca, Popayán": "波帕扬“白色之城”",
    "Leticia, Amazonas": "亚马孙省莱蒂西亚",
    Milán: "米兰",
    "Viña del mar, Valparaíso": "瓦尔帕莱索比尼亚德尔马",
    "Florencia, Caquetá": "卡克塔省弗洛伦西亚",
    "Guadalajara, Jalisco": "哈利斯科州瓜达拉哈拉",
    "Finca Los Pinos, Acevedo-Huila": "乌伊拉阿塞韦多 Los Pinos 庄园",
    "Robosen, Shanghái": "上海 Robosen",
    "Catedral de La Plata, Buenos Aires": "布宜诺斯艾利斯拉普拉塔大教堂",

    // Around The World: frases
    "Entre cafetales y colores.": "在咖啡田与缤纷色彩之间。",
    "Hasta el más pequeño de la casa lo espera.": "连家里最小的成员都在期待它。",
    "A los pies del Cristo Redentor.": "在救世基督像脚下。",
    "El café como tesoro colonial": "咖啡，殖民古城的珍宝",
    "Café del Huila en el corazón de la selva.": "雨林深处的乌伊拉咖啡。",
    "Café de tierra aceveduna frente al Duomo.": "来自阿塞韦多的咖啡，站在米兰大教堂前。",
    "Buen café, mágico paisaje.": "好咖啡，配上神奇的风景。",
    "Donde el río suena, hay café.": "哪里有河水歌唱，哪里就有咖啡。",
    "En la escalera Selarón.": "在塞勒隆阶梯上。",
    "Por estas zona, el café sabe más picante.": "在这里，咖啡的味道都更辣一点。",
    "En casa.": "回到家了。",
    "Café futurístico.": "未来感十足的咖啡。",
    "Catedral+Café=Combinación divina.": "大教堂 + 咖啡 = 神圣组合。",
  },
};

export default zh;
