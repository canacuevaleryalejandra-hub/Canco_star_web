import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Trash2, X } from "lucide-react";
import { useCart } from "../context/cart";
import { FUENTE_TASAS, usePrecio } from "../i18n/moneda";
import { useLanguage } from "../i18n/language";

// Panel lateral del carrito. Se abre con el ícono del carrito en el header.
export function CartDrawer() {
  const { t } = useLanguage();
  const { precio, enPesos, esAproximado, codigo } = usePrecio();
  const { items, total, isOpen, closeCart, removeItem } = useCart();
  const closeButtonRef = useRef(null);

  // Mientras está abierto: foco en "cerrar", la página de atrás no hace scroll y Escape lo cierra.
  // Al cerrarse, el foco vuelve al botón que lo abrió.
  useEffect(() => {
    if (!isOpen) return;

    const previousFocus = document.activeElement;
    closeButtonRef.current.focus();
    document.body.style.overflow = "hidden";

    const handleEscape = (e) => {
      if (e.key === "Escape") closeCart();
    };
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
      previousFocus?.focus();
    };
  }, [isOpen, closeCart]);

  return (
    // "inert" vuelve el panel cerrado invisible para el teclado y los lectores de pantalla
    <div className={isOpen ? "cart-layer open" : "cart-layer"} inert={!isOpen}>
      <div className="cart-overlay" onClick={closeCart} />

      <aside className="cart-drawer" role="dialog" aria-modal="true" aria-labelledby="cart-title">
        <div className="cart-drawer-header">
          <h2 id="cart-title">{t("carrito.titulo")}</h2>
          <button
            ref={closeButtonRef}
            type="button"
            className="icon-btn"
            aria-label={t("carrito.cerrar")}
            onClick={closeCart}
          >
            <X size={22} aria-hidden="true" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="cart-empty">
            <p>{t("carrito.vacio")}</p>
            <Link to="/tienda" className="btn-gold" onClick={closeCart}>
              {t("carrito.irATienda")}
            </Link>
          </div>
        ) : (
          <>
            <ul className="cart-items">
              {items.map((item) => (
                <li key={item.id} className="cart-item">
                  {item.imagen && <img src={item.imagen} alt="" />}
                  <div className="cart-item-info">
                    {/* El nombre se guarda en español y se traduce al mostrarlo */}
                    <p className="cart-item-name">{t.texto(item.nombre)}</p>
                    {item.presentacion && <p className="cart-item-detail">{item.presentacion}</p>}
                    <p className="cart-item-detail">
                      {item.cantidad} × {esAproximado && "≈ "}{precio(item.precio)}
                    </p>
                  </div>
                  <button
                    type="button"
                    className="icon-btn"
                    aria-label={t("carrito.quitar", { producto: t.texto(item.nombre) })}
                    onClick={() => removeItem(item.id)}
                  >
                    <Trash2 size={18} aria-hidden="true" />
                  </button>
                </li>
              ))}
            </ul>

            <div className="cart-footer">
              <p className="cart-total">
                <span>{t("carrito.total")}</span>
                <span>{esAproximado && "≈ "}{precio(total)}</span>
              </p>
              {/* En otra moneda se aclara que el cobro es en pesos y cuánto es */}
              {esAproximado && (
                <p className="cart-note cart-note-moneda">
                  {t("carrito.cobroEnPesos", { moneda: codigo, precio: enPesos(total) })}{" "}
                  <a href={FUENTE_TASAS.enlace} target="_blank" rel="noopener noreferrer">
                    {t("tienda.tasas")}: {FUENTE_TASAS.nombre}
                  </a>
                </p>
              )}
              <p className="cart-note">{t("carrito.nota")}</p>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
