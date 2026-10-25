import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { X } from "lucide-react";
import { useLanguage } from "../i18n/language";
// Los textos y fotos de las tarjetas se editan en src/data/legado.js
import { cardsData } from "../data/legado";

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
