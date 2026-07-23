import { Cards } from "./Cards";
import { VideoReel } from "./VideoReel";

export function Contents() {
  return (
    <main>
      {/* Sección Hero */}
      <section className="hero" id="inicio">
        <h2>Bienvenidos a</h2>
        <p>CANCO STAR - Cafe de Especialidad</p>
        <button className="btn">Conoce nuestro cafe</button>
      </section>

      {/* Video Reel */}
      < VideoReel />

      {/* Sección de Tarjetas */}
      <Cards />
    </main>
  );
}

