import { useEffect, useRef, useState } from "react";
import { Check, Globe } from "lucide-react";
import { idiomas, useLanguage } from "../i18n/language";

// Botón del globo terráqueo en el header: abre una lista hacia abajo con los idiomas.
// Al elegir uno, todo el sitio cambia al instante y el navegador lo recuerda.
// Se cierra al elegir, al hacer clic fuera o con Escape.
export function LanguagePicker() {
  const { idioma, setIdioma, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);
  const buttonRef = useRef(null);
  const actual = idiomas.find((i) => i.id === idioma);

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (e) => {
      if (!wrapperRef.current.contains(e.target)) setOpen(false);
    };
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current.focus();
      }
    };

    document.addEventListener("pointerdown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  const choose = (id) => {
    setIdioma(id);
    setOpen(false);
    buttonRef.current.focus();
  };

  return (
    <div className="lang-picker" ref={wrapperRef}>
      <button
        ref={buttonRef}
        type="button"
        className="icon-btn lang-btn"
        aria-label={t("header.idioma", { idioma: actual.nombre })}
        aria-expanded={open}
        aria-controls="lang-menu"
        onClick={() => setOpen(!open)}
      >
        <Globe size={22} aria-hidden="true" />
        <span className="lang-code" aria-hidden="true">{actual.corto}</span>
      </button>

      {open && (
        <ul className="lang-menu" id="lang-menu" aria-label={t("header.idiomas")}>
          {idiomas.map((i) => (
            <li key={i.id}>
              {/* lang: cada nombre se pronuncia en su propio idioma en los lectores de pantalla */}
              <button
                type="button"
                className="lang-option"
                lang={i.codigo}
                aria-current={i.id === idioma ? "true" : undefined}
                onClick={() => choose(i.id)}
              >
                {i.nombre}
                {i.id === idioma && <Check size={16} aria-hidden="true" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
