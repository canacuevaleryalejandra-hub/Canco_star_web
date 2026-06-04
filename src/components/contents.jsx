import { Cards } from "./Cards";

export function Contents() {
  return (
    <main>
      {/* Sección Hero */}
      <section className="hero" id="inicio">
        <h2>Bienvenidos a</h2>
        <p>CANCO STAR - Cafe de Especialidad</p>
        <button className="btn">Conoce nuestro cafe</button>
      </section>

      {/* Sección de Tarjetas */}
      <Cards />
    </main>
  );
}

