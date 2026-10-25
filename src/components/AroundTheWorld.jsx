import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatedCounter } from "./AnimatedCounter";
import { Lightbox } from "./Lightbox";
import { alcance, fotos, regiones } from "../data/aroundTheWorld";
import { useLanguage } from "../i18n/language";

// Las fotos, ciudades, frases y números de los contadores se editan en src/data/aroundTheWorld.js.
// Sus traducciones (países, lugares y frases) están en src/i18n, sección "textos" de cada idioma.
const tabs = [
  { id: "nacional", nombre: "atw.nacional", icono: "🇨🇴" },
  { id: "internacional", nombre: "atw.internacional", icono: "🌎" },
];

export function AroundTheWorld() {
  const { t } = useLanguage();
  const [tab, setTab] = useState("nacional");
  // Región elegida en la pestaña Internacional (null = todas)
  const [region, setRegion] = useState(null);
  // Posición de la foto abierta en grande (null = ninguna)
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const visibles = fotos.filter(
    (foto) => foto.categoria === tab && (tab === "nacional" || !region || foto.region === region)
  );
  const regionActual = regiones.find((r) => r.id === region);

  const selectTab = (id) => {
    setTab(id);
    setRegion(null);
  };

  // Pestañas accesibles: con las flechas ← → del teclado se cambia de pestaña
  const handleTabKeyDown = (e) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const position = tabs.findIndex((pestana) => pestana.id === tab);
    const next = tabs[(position + (e.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length];
    selectTab(next.id);
    document.getElementById(`atw-tab-${next.id}`).focus();
  };

  return (
    <section className="atw" id="around-the-world">
      <header className="atw-header">
        <p className="atw-kicker">{t("atw.kicker")}</p>
        <h2 className="atw-title">{t("atw.titulo")}</h2>
        <p className="atw-subtitle">{t("atw.subtitulo")}</p>

        <div className="atw-counters">
          <AnimatedCounter value={alcance.ciudadesColombia} label={t("atw.ciudades")} />
          <AnimatedCounter value={alcance.paises} label={t("atw.paises")} />
          <AnimatedCounter value={alcance.continentes} label={t("atw.continentes")} />
        </div>
      </header>

      <div className="atw-tabs" role="tablist" aria-label={t("atw.pestanas")} onKeyDown={handleTabKeyDown}>
        {tabs.map((pestana) => (
          <button
            key={pestana.id}
            type="button"
            role="tab"
            id={`atw-tab-${pestana.id}`}
            className="atw-tab"
            aria-selected={tab === pestana.id}
            aria-controls="atw-panel"
            tabIndex={tab === pestana.id ? 0 : -1}
            onClick={() => selectTab(pestana.id)}
          >
            {t(pestana.nombre)} <span aria-hidden="true">{pestana.icono}</span>
          </button>
        ))}
      </div>

      <div className="atw-panel" id="atw-panel" role="tabpanel" aria-labelledby={`atw-tab-${tab}`}>
        {tab === "internacional" && (
          <div className="atw-regions" role="group" aria-label={t("atw.filtrar")}>
            {[{ id: null }, ...regiones].map((r) => (
              <button
                key={r.id ?? "todas"}
                type="button"
                className="atw-region"
                aria-pressed={region === r.id}
                onClick={() => setRegion(r.id)}
              >
                {r.id ? t(`atw.regiones.${r.id}`, null, r.nombre) : t("atw.todas")}
              </button>
            ))}
          </div>
        )}

        {visibles.length > 0 ? (
          // Mosaico (masonry): CSS reparte las fotos en columnas y cada una conserva su altura
          <ul className="atw-grid">
            {visibles.map((foto, i) => (
              <li key={`${i}-${foto.imagen}`} className="atw-item">
                <button type="button" className="atw-card" onClick={() => setLightboxIndex(i)}>
                  <img src={foto.imagen} alt="" loading="lazy" />
                  <span className="atw-caption">
                    <span className="atw-place">
                      <span className="atw-flag" aria-hidden="true">{foto.bandera}</span>
                      <span>
                        <span className="atw-city">{t.texto(foto.ciudad)}</span>
                        <span className="atw-country">{t.texto(foto.pais)}</span>
                      </span>
                    </span>
                    {foto.frase && <span className="atw-frase">{t.texto(foto.frase)}</span>}
                  </span>
                  <span className="visually-hidden">. {t("atw.verGrande")}</span>
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <div className="atw-empty">
            <p>
              {t("atw.vacio", {
                region: regionActual ? t(`atw.regiones.${regionActual.id}`, null, regionActual.nombre) : t("atw.estaRegion"),
              })}
            </p>
            <Link to="/#redes" className="btn-gold">{t("atw.compartir")}</Link>
          </div>
        )}
      </div>

      <Lightbox
        fotos={visibles}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onChange={setLightboxIndex}
      />
    </section>
  );
}
