// Datos de las tarjetas - edita aqui para cambiar contenido
const cardsData = [
  {
    id: 1,
    title: "Semilleros de Cafe",
    image: "/public/semilleros-cafe.png",
    description: "Cultivamos nuestras plantas desde semilla, cuidando cada etapa del crecimiento con dedicacion y amor por la tierra."
  },
  {
    id: 2,
    title: "Nuestros Campesinos",
    image: "/public/campesinos.png",
    description: "Familias cafeteras con generaciones de experiencia, llevando la tradicion del cafe huilense en cada grano."
  },
  {
    id: 3,
    title: "Cabañas Cafeteras",
    image: "/public/cabañas.png",
    description: "Espacios acogedores rodeados de naturaleza, donde el cafe se vive y se respira en cada rincon."
  },
  {
    id: 4,
    title: "El Paraiso Huilense",
    image: "/public/campo.jpeg",
    description: "Paisajes unicos de las montanas del Huila, donde nuestro cafe crece entre valles y neblina."
  }
];

export function Cards() {
  return (
    <section className="cards-section" id="historia">
      <h2 className="cards-section-title">Conoce Nuestra Finca</h2>
      
      <div className="cards-container">
        {cardsData.map((card) => (
          <article className="card" key={card.id}>
            <h3 className="card-title">{card.title}</h3>
            <img 
              className="card-image" 
              src={card.image} 
              alt={card.title} 
            />
            <p className="card-description">{card.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}