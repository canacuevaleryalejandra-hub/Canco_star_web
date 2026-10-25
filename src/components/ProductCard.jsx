import { useState } from "react";
import { Link } from "react-router-dom";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "../context/cart";
import { formatPrice } from "../utils/format";
import { useLanguage } from "../i18n/language";

// Tarjeta de un producto de la tienda.
// Si el producto tiene "presentaciones" (250 g / 500 g), al elegir una cambian la foto y el precio.
export function ProductCard({ producto, categoria }) {
  const { t } = useLanguage();
  const { addItem, openCart } = useCart();
  const { presentaciones } = producto;
  const [presentacionId, setPresentacionId] = useState(presentaciones?.[0].id);
  const [cantidad, setCantidad] = useState(1);

  const presentacion = presentaciones?.find((p) => p.id === presentacionId);
  const precio = presentacion ? presentacion.precio : producto.precio;
  const imagen = presentacion ? presentacion.imagen : producto.imagen;
  // El nombre se guarda en el carrito en español; el carrito lo traduce al mostrarlo
  const nombre = t.texto(producto.nombre);
  const nombreCompleto = presentacion ? `${nombre} ${presentacion.nombre}` : nombre;

  const handleAdd = () => {
    addItem(
      {
        // Cada presentación va por separado en el carrito: "cafe-grano-250g", "cafe-grano-500g"
        id: presentacion ? `${producto.id}-${presentacion.id}` : producto.id,
        nombre: producto.nombre,
        presentacion: presentacion?.nombre,
        precio,
        imagen,
      },
      cantidad
    );
    setCantidad(1);
    openCart();
  };

  return (
    <article className="product-card" id={producto.id}>
      <div className="product-image-wrap">
        {/* "key" hace que la foto nueva aparezca con la animación al cambiar de presentación */}
        <img key={imagen} className="product-image" src={imagen} alt={nombreCompleto} loading="lazy" />
        {categoria && <span className="product-tag">{categoria}</span>}
      </div>

      <div className="product-body">
        <h3 className="product-name">{nombre}</h3>
        <p className="product-description">{t.texto(producto.descripcion)}</p>

        {presentaciones && (
          <div className="presentation-picker" role="group" aria-label={t("producto.presentacion")}>
            {presentaciones.map((p) => (
              <button
                key={p.id}
                type="button"
                className="presentation-option"
                aria-pressed={p.id === presentacionId}
                onClick={() => setPresentacionId(p.id)}
              >
                {p.nombre}
              </button>
            ))}
          </div>
        )}

        <p className="product-price">
          {precio != null ? formatPrice(precio) : t("producto.precioPorConfirmar")}
        </p>

        {precio != null ? (
          <div className="product-actions">
            <div className="qty-stepper" role="group" aria-label={t("producto.cantidad")}>
              <button
                type="button"
                aria-label={t("producto.quitarUnidad")}
                disabled={cantidad === 1}
                onClick={() => setCantidad(cantidad - 1)}
              >
                <Minus size={16} aria-hidden="true" />
              </button>
              <span aria-live="polite">{cantidad}</span>
              <button type="button" aria-label={t("producto.agregarUnidad")} onClick={() => setCantidad(cantidad + 1)}>
                <Plus size={16} aria-hidden="true" />
              </button>
            </div>

            <button type="button" className="btn-gold product-add" onClick={handleAdd}>
              <ShoppingBag size={18} aria-hidden="true" />
              {t("producto.agregar")}
            </button>
          </div>
        ) : (
          <Link to="/#contacto" className="btn-outline">
            {t("producto.consultarPrecio")}
          </Link>
        )}
      </div>
    </article>
  );
}
