import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown, Search, ShoppingBag, X } from "lucide-react";
import { useCart } from "../context/cart";
import { useLanguage } from "../i18n/language";
import { LanguagePicker } from "./LanguagePicker";

// Menú del header - edita aquí las secciones y sus subsecciones.
// "label" es la clave del texto en src/i18n (menu.inicio → "Inicio", "Home", "Início", "首页").
// "to" es la página principal ("/") más el id de la sección ("#inicio"),
// o una ruta de otra página ("/tienda"). Sin "items" no se muestra la flecha.
const menuData = [
  {
    label: "menu.inicio",
    to: "/#inicio",
    items: [
      { label: "menu.bienvenida", to: "/#inicio" },
      { label: "menu.experienciaVisual", to: "/#reel" },
    ],
  },
  {
    label: "menu.legado",
    to: "/#legado-y-tradicion",
    // Estos enlaces bajan a la tarjeta y además abren su ventana (ver Cards.jsx)
    items: [
      { label: "menu.procesos", to: "/#procesos" },
      { label: "menu.familia", to: "/#familia" },
      { label: "menu.finca", to: "/#finca" },
      { label: "menu.paraiso", to: "/#paraiso" },
    ],
  },
  {
    label: "menu.aroundTheWorld",
    to: "/#around-the-world",
    items: [],
  },
  {
    label: "menu.contacto",
    to: "/#contacto-star",
    items: [
      { label: "menu.telefono", to: "/#contacto" },
      { label: "menu.redes", to: "/#redes" },
    ],
  },
  {
    label: "menu.tienda",
    to: "/tienda",
    items: [],
  },
];

export function Head() {
  const { t } = useLanguage();
  // Posición del submenú abierto en menuData (null = todos cerrados)
  const [openIndex, setOpenIndex] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  // true cuando la barra de anuncios ya salió de la pantalla y el header quedó fijo arriba
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);
  const navigate = useNavigate();
  const { count, openCart } = useCart();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mientras hay un submenú abierto, se cierra al hacer clic fuera o al presionar Escape
  useEffect(() => {
    if (openIndex === null) return;

    const handleClickOutside = (e) => {
      if (!navRef.current.contains(e.target)) setOpenIndex(null);
    };
    const handleEscape = (e) => {
      if (e.key === "Escape") setOpenIndex(null);
    };

    document.addEventListener("pointerdown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [openIndex]);

  const closeMenu = () => setOpenIndex(null);

  // La búsqueda lleva a la tienda con lo que se escribió: /tienda?buscar=v60
  const handleSearch = (e) => {
    e.preventDefault();
    const text = query.trim();
    if (!text) return;
    navigate(`/tienda?buscar=${encodeURIComponent(text)}`);
    setSearchOpen(false);
    setQuery("");
  };

  return (
    <header className={isScrolled ? "header is-scrolled" : "header"}>
      <Link to="/" className="logo-link" aria-label={t("menu.irAlInicio")}>
        <img className="img-logo" src="/CANCO STAR.jpeg" alt="" />
        <span className="logo-text">
          <span className="logo-name">CANCO</span>
          <span className="logo-sub">• STAR •</span>
        </span>
      </Link>

      <nav ref={navRef} aria-label={t("menu.etiqueta")}>
        <ul className="nav-menu">
          {menuData.map((section, index) => (
            <li
              key={section.label}
              className={openIndex === index ? "nav-item open" : "nav-item"}
              // Con mouse se abre al pasar por encima; en celular y con teclado, con el botón de flecha
              onPointerEnter={(e) => e.pointerType === "mouse" && section.items.length > 0 && setOpenIndex(index)}
              onPointerLeave={(e) => e.pointerType === "mouse" && closeMenu()}
            >
              <Link to={section.to} className="nav-link" onClick={closeMenu}>
                {t(section.label)}
              </Link>

              {section.items.length > 0 && (
                <>
                  <button
                    type="button"
                    className="submenu-toggle"
                    aria-label={t("menu.verSubsecciones", { seccion: t(section.label) })}
                    aria-expanded={openIndex === index}
                    aria-controls={`submenu-${index}`}
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <ChevronDown size={16} aria-hidden="true" />
                  </button>

                  <ul className="submenu" id={`submenu-${index}`}>
                    {section.items.map((item) => (
                      <li key={item.to}>
                        <Link to={item.to} onClick={closeMenu}>
                          {t(item.label)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div className="header-actions">
        {/* Globo terráqueo: lista de idiomas (Español, English, Português, 中文) */}
        <LanguagePicker />

        <button
          type="button"
          className="icon-btn"
          aria-label={searchOpen ? t("header.cerrarBusqueda") : t("header.buscar")}
          aria-expanded={searchOpen}
          aria-controls="header-search"
          onClick={() => setSearchOpen(!searchOpen)}
        >
          {searchOpen ? <X size={22} aria-hidden="true" /> : <Search size={22} aria-hidden="true" />}
        </button>

        <button
          type="button"
          className="icon-btn"
          aria-label={t("header.carrito", {
            cantidad: count,
            unidad: count === 1 ? t("header.producto") : t("header.productos"),
          })}
          onClick={openCart}
        >
          <ShoppingBag size={22} aria-hidden="true" />
          <span className="cart-count" aria-hidden="true">{count}</span>
        </button>
      </div>

      {searchOpen && (
        <form id="header-search" className="header-search" role="search" onSubmit={handleSearch}>
          <input
            type="search"
            className="header-search-input"
            placeholder={t("header.buscarPlaceholder")}
            aria-label={t("header.buscarEtiqueta")}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Escape" && setSearchOpen(false)}
            autoFocus
          />
          <button type="submit" className="btn-gold">{t("header.buscar")}</button>
        </form>
      )}
    </header>
  );
}
