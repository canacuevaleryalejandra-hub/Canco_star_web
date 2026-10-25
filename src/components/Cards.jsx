import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { X } from "lucide-react";
import { useLanguage } from "../i18n/language";

// Datos de las tarjetas - edita aqui para cambiar contenido (en español).
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
const cardsData = [
  {
    id: 1,
    slug: "procesos",
    title: "Procesos mágicos",
    image: "./Flores_star.jpeg",
    description: "Cultivamos nuestras plantas desde semilla, cuidando cada etapa del crecimiento con dedicacion y amor por la tierra, tanto que la magia florece naturalmente.",
    // FOTO TEMPORAL
    detailImage: "/secadero.jpg",
    detailImageAlt: "Semilleros de café",
    // TEXTO DE EJEMPLO
    detail: [
      "Todo empieza en el semillero. Allí escogemos las mejores semillas y las acompañamos durante sus primeras semanas, hasta que están listas para llegar a la tierra.",
      "Después vienen la siembra, la floración y la cosecha a mano, grano por grano. Cada etapa se hace con paciencia, porque sabemos que de ella depende lo que luego llega a tu taza.",
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
      "Detrás de cada bolsa de Canco Café hay una familia. El conocimiento del café ha pasado de generación en generación, de los abuelos a los padres y de los padres a los hijos.",
      "Aquí puedes contar quiénes son, cómo empezó la tradición cafetera de la familia y qué significa para ustedes seguir trabajando la tierra.",
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
      "La finca es nuestro hogar y el corazón de Canco Café. Entre sus montañas crecen los cafetales que dan origen a cada grano que llega a tu casa.",
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
      "Aquí puedes contar cómo es el paisaje de Acevedo, qué se ve desde la finca y por qué este rincón del Huila es un paraíso para el café.",
    ],
  },
];

// "reel": el video que va a la izquierda de las tarjetas (ver contents.jsx)
export function Cards({ reel }) {
  const { t } = useLanguage();
  const location = useLocation();
  // slug de la tarjeta abierta con un clic (null = ninguna)
  const [selectedSlug, setSelectedSlug] = useState(null);
  // Navegación (location.key) cuya tarjeta ya se cerró, para no volver a abrirla sola
  const [dismissedKey, setDismissedKey] = useState(null);
  const dialogRef = useRef(null);

  // Los enlaces del menú ("/#finca") bajan a la tarjeta y además la abren.
  // No se hace en la primera carga (location.key === "default"), porque ahí la página
  // todavía está detrás del splash.
  const hashSlug = location.hash.slice(1);
  const slugDelMenu =
    location.key !== "default" && dismissedKey !== location.key && cardsData.some((card) => card.slug === hashSlug)
      ? hashSlug
      : null;
  const selected = cardsData.find((card) => card.slug === (selectedSlug ?? slugDelMenu));

  // <dialog> es una ventana nativa del navegador: showModal() la abre encima de todo,
  // mantiene el foco adentro y la cierra con Escape. Al cerrarse, el foco vuelve a la tarjeta.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!selected) return;

    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
      if (dialog.open) dialog.close();
    };
  }, [selected]);

  const closeStory = () => {
    setSelectedSlug(null);
    setDismissedKey(location.key);
  };

  // Clic en el fondo oscuro (fuera de la ventana) → cerrar
  const handleDialogClick = (e) => {
    if (e.target === dialogRef.current) closeStory();
  };

  return (
    <section className="cards-section" id="legado-y-tradicion">
      <h2 className="cards-section-title">{t("legado.titulo")}</h2>

      {/* El reel a la izquierda y las tarjetas a la derecha, de dos en dos (ver .legado-layout en App.css) */}
      <div className="legado-layout">
        {reel && <div className="legado-reel">{reel}</div>}

        <div className="cards-container">
          {cardsData.map((card) => (
            <article className="card card-interactive" key={card.id} id={card.slug}>
              <h3 className="card-title">{t.texto(card.title)}</h3>
              <img className="card-image" src={card.image} alt={t.texto(card.title)} />
              <p className="card-description">{t.texto(card.description)}</p>
              {/* El botón cubre toda la tarjeta (ver .card-more::after en App.css): se puede hacer clic en cualquier parte */}
              <button
                type="button"
                className="card-more"
                aria-haspopup="dialog"
                onClick={() => setSelectedSlug(card.slug)}
              >
                {t("legado.leerMas")} <span aria-hidden="true">→</span>
                <span className="visually-hidden"> {t("legado.sobre", { titulo: t.texto(card.title) })}</span>
              </button>
            </article>
          ))}
        </div>
      </div>

      <dialog
        ref={dialogRef}
        className="story-dialog"
        aria-labelledby="story-title"
        onClose={closeStory}
        onClick={handleDialogClick}
      >
        {selected && (
          <div className="story">
            <button
              type="button"
              className="icon-btn story-close"
              aria-label={t("legado.cerrar")}
              onClick={closeStory}
            >
              <X size={22} aria-hidden="true" />
            </button>

            <div className="story-media">
              <img src={selected.detailImage} alt={t.texto(selected.detailImageAlt)} />
            </div>

            <div className="story-body">
              <p className="story-kicker">{t("legado.kicker")}</p>
              <h3 id="story-title" className="story-title">{t.texto(selected.title)}</h3>
              {selected.detail.map((texto) => (
                <p key={texto} className="story-text">{t.texto(texto)}</p>
              ))}
              <Link to="/tienda" className="btn-gold story-cta" onClick={closeStory}>
                {t("legado.probar")}
              </Link>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
