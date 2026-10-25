import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useLanguage } from "../i18n/language";

// Visor de fotos en grande. "index" es la posición de la foto abierta en "fotos" (null = cerrado).
// Se navega con las flechas de la pantalla, las del teclado o deslizando en el celular.
// Se cierra con la X, con Escape o con un clic en el fondo.
export function Lightbox({ fotos, index, onClose, onChange }) {
  const { t } = useLanguage();
  const dialogRef = useRef(null);
  const touchStartX = useRef(null);
  const foto = index === null ? null : fotos[index];
  const isOpen = foto != null;
  const lugar = foto ? `${t.texto(foto.ciudad)}, ${t.texto(foto.pais)}` : "";

  // Se abre una sola vez al elegir una foto; cambiar de foto no lo vuelve a abrir
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!isOpen) return;

    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
      if (dialog.open) dialog.close();
    };
  }, [isOpen]);

  // Al llegar al final vuelve a empezar (y al revés)
  const go = (step) => onChange((index + step + fotos.length) % fotos.length);
  const canNavigate = fotos.length > 1;

  const handleKeyDown = (e) => {
    if (!canNavigate) return;
    if (e.key === "ArrowRight") go(1);
    if (e.key === "ArrowLeft") go(-1);
  };

  const handleClick = (e) => {
    if (e.target === dialogRef.current) onClose();
  };

  // Deslizar el dedo más de 50 px cambia de foto
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null || !canNavigate) return;
    const distance = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(distance) > 50) go(distance < 0 ? 1 : -1);
    touchStartX.current = null;
  };

  return (
    <dialog
      ref={dialogRef}
      className="lightbox"
      aria-label={foto ? t("lightbox.fotoEn", { lugar }) : t("lightbox.foto")}
      onClose={onClose}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
      onTouchEnd={handleTouchEnd}
    >
      {foto && (
        <>
          <button type="button" className="lightbox-btn lightbox-close" aria-label={t("lightbox.cerrar")} onClick={onClose}>
            <X size={24} aria-hidden="true" />
          </button>

          {canNavigate && (
            <button type="button" className="lightbox-btn lightbox-prev" aria-label={t("lightbox.anterior")} onClick={() => go(-1)}>
              <ChevronLeft size={30} aria-hidden="true" />
            </button>
          )}

          <figure className="lightbox-figure">
            {/* "key" hace que cada foto nueva entre con la animación */}
            <img key={foto.imagen} src={foto.imagen} alt={t("lightbox.alt", { lugar })} />
            <figcaption className="lightbox-caption">
              <span className="lightbox-place">
                <span aria-hidden="true">{foto.bandera}</span> {lugar}
              </span>
              {foto.frase && <span className="lightbox-frase">{t.texto(foto.frase)}</span>}
              <span className="lightbox-count">
                {index + 1} / {fotos.length}
              </span>
            </figcaption>
          </figure>

          {canNavigate && (
            <button type="button" className="lightbox-btn lightbox-next" aria-label={t("lightbox.siguiente")} onClick={() => go(1)}>
              <ChevronRight size={30} aria-hidden="true" />
            </button>
          )}
        </>
      )}
    </dialog>
  );
}
