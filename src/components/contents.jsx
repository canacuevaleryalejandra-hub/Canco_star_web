import { Link } from "react-router-dom";
import { Cards } from "./Cards";
import { VideoReel } from "./VideoReel";
import { AroundTheWorld } from "./AroundTheWorld";
import { useLanguage } from "../i18n/language";

export function Contents() {
  const { t } = useLanguage();
  return (
    <main>
      {/* Sección Hero en capas, como el boceto: atrás el cafetal (Campe_sino.jpeg), en el medio
          "CANCO" (arriba a la izquierda) y "ST★R" (abajo a la derecha), y adelante papá recortado
          (papa_02.png). La foto y el recorte miden lo mismo (1088×1600), así que al ponerlos uno
          encima del otro papá queda exactamente sobre sí mismo */}
      <section className="hero" id="inicio">
        <div className="hero-scene">
          {/* Atrás: el cafetal, en una caja con los bordes desvanecidos hacia los lados */}
          <div className="hero-frame hero-photo">
            <img className="hero-bg" src="/Campe_sino.jpeg" alt="" width="1088" height="1600" />
          </div>

          {/* Adelante: las letras y papá, en otra caja con la misma posición y tamaño que la de
              atrás pero sin desvanecer, para que las letras puedan salirse a los lados */}
          <div className="hero-frame hero-front">
            <h1 className="hero-word">
              {/* Lo que leen Google y los lectores de pantalla */}
              <span className="visually-hidden">Canco Star</span>

              {/* Lo que se ve: cada letra en su span para animarlas una por una (--i es su orden).
                  La posición de cada palabra se ajusta en App.css */}
              <span className="hero-line hero-canco" aria-hidden="true">
                {["C", "A", "N", "C", "O"].map((letra, i) => (
                  <span key={i} className="hero-letter" style={{ "--i": i }}>
                    {letra}
                  </span>
                ))}
              </span>
              <span className="hero-line hero-star-word" aria-hidden="true">
                <span className="hero-letter" style={{ "--i": 6 }}>S</span>
                <span className="hero-letter" style={{ "--i": 7 }}>T</span>
                {/* La estrella de Canco en lugar de la "A". star_canco.png es una copia con fondo
                    transparente de star_canco.jpg (que tiene fondo blanco), recortada a la forma */}
                <span className="hero-star" style={{ "--i": 8 }}>
                  <img src="/star_canco.png" alt="" width="488" height="425" />
                </span>
                <span className="hero-letter" style={{ "--i": 9 }}>R</span>
              </span>
            </h1>
            <img
              className="hero-person"
              src="/papa_02.png"
              alt={t("hero.personaAlt")}
              width="1088"
              height="1600"
            />
          </div>

          {/* Flores en primer plano, desenfocadas, para llenar los lados en pantallas anchas
              (en celular se ocultan). Son decorativas: alt vacío */}
          <img className="hero-flor hero-flor-izq" src="/Flores_transparente.png" alt="" width="518" height="482" />
          <img className="hero-flor hero-flor-der" src="/Flores_transparente.png" alt="" width="518" height="482" />
        </div>

        <div className="hero-text">
          <p className="hero-subtitle">{t("hero.subtitulo")}</p>
          {/* Lleva a la tarjeta "La Finca" (id="finca") dentro de Legado y tradición */}
          <Link to="/#finca" className="btn-gold hero-btn">
            {t("hero.boton")}
          </Link>
        </div>
      </section>

      {/* Legado y tradición: el reel a la izquierda y las tarjetas a su derecha */}
      <Cards reel={<VideoReel />} />

      {/* Around The World (#around-the-world) */}
      <AroundTheWorld />
    </main>
  );
}
