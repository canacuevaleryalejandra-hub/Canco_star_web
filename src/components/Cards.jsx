// Datos de las tarjetas - edita aqui para cambiar contenido
const cardsData = [
  {
    id: 1,
    title: "Procesos mágicos",
    image: "./Flores_star.jpeg",
    description: "Cultivamos nuestras plantas desde semilla, cuidando cada etapa del crecimiento con dedicacion y amor por la tierra, tanto que la magia florece naturalmente."
  },
  {
    id: 2,
    title: "La familia Star",
    image: "./Campe_sino.jpeg",
    description: "Familias cafeteras con generaciones de experiencia, llevando la tradicion y berraquera del cafe huilense en cada grano."
  },
  {
    id: 3,
    title: "La Finca",
    image: "./cabañas.png",
    description: "El epicentro mágico y nuestra principal fuente de producción, rodeada de maravillosos paisajes que gritan tradición, naturaleza y vida a los cuatro vientos."
  },
  {
    id: 4,
    title: "El Paraiso Huilense",
    image: "./campo.jpeg",
    description: "Paisajes unicos de las montanas del Huila, donde nuestro cafe crece entre valles y neblina."
  }
];

export function Cards() {
  return (
    <section className="cards-section" id="historia">
      <h2 className="cards-section-title">Explora Nuestra Escencia</h2>
      
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