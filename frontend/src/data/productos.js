// Catálogo de la tienda - edita aquí productos, precios, fotos y descripciones.
// Las fotos están en public/Products/. Un precio en null muestra "Precio por confirmar".

export const categorias = [
  { id: "grano", nombre: "Café en grano" },
  { id: "molido", nombre: "Café molido" },
  { id: "metodos", nombre: "Métodos de preparación" },
  { id: "accesorios", nombre: "Accesorios" },
];

// Las dos bolsas de Castillo Tambo cuestan lo mismo en 250 g y en 500 g
const presentacionesCafe = [
  { id: "250g", nombre: "250 g", precio: 37000, imagen: "/Products/Canco250.jpeg" },
  { id: "500g", nombre: "500 g", precio: 37000, imagen: "/Products/Canco500.jpeg" },
];

export const productos = [
  {
    id: "cafe-grano",
    categoria: "grano",
    nombre: "Café en grano Castillo Tambo",
    descripcion:
      "Café de especialidad de la familia Canacue-Collazos, en Acevedo, Huila. Muélelo en casa justo antes de prepararlo.",
    presentaciones: presentacionesCafe,
  },
  {
    id: "cafe-molido",
    categoria: "molido",
    nombre: "Café molido Castillo Tambo",
    descripcion:
      "El mismo café de especialidad del Huila, listo para preparar en tu método favorito.",
    presentaciones: presentacionesCafe,
  },
  {
    id: "v60",
    categoria: "metodos",
    nombre: "Método V60",
    descripcion: "Cafetera de goteo para preparar una taza limpia que resalta las notas del café.",
    precio: 62000,
    imagen: "/Products/V60.jpeg",
  },
  {
    id: "prensa-francesa",
    categoria: "metodos",
    nombre: "Prensa francesa",
    descripcion: "Preparación sencilla por inmersión, para una taza con más cuerpo.",
    precio: 75000,
    imagen: "/Products/PrensaF.jpeg",
  },
  {
    id: "chemex",
    categoria: "metodos",
    nombre: "Chemex",
    descripcion: "Cafetera de vidrio con filtro, ideal para preparar varias tazas y compartir.",
    precio: 85000,
    imagen: "/Products/Chemex.jpeg",
  },
  {
    id: "filtros-v60",
    categoria: "accesorios",
    nombre: "Filtros para V60",
    descripcion: "Caja de 100 filtros de papel para preparar café en tu V60.",
    precio: 30000,
    imagen: "/Products/Fv60.jpeg",
  },
];
