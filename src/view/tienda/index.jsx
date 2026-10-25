import { Link, useSearchParams } from "react-router-dom";
import { ProductCard } from "../../components/ProductCard";
import { categorias, productos } from "../../data/productos";
import { useLanguage } from "../../i18n/language";

// "Café Molído" → "cafe molido", para que la búsqueda no dependa de tildes ni mayúsculas
function normalizar(texto) {
  return texto.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
}

const nombreCategoria = Object.fromEntries(categorias.map((c) => [c.id, c.nombre]));

// Página de la Tienda (/tienda). Lee los filtros de la URL:
// /tienda?categoria=metodos  → solo métodos de preparación
// /tienda?buscar=v60         → lo que se buscó desde la lupa del header
export default function Tienda() {
  const { t } = useLanguage();
  const [searchParams] = useSearchParams();
  const categoria = searchParams.get("categoria");
  const buscar = searchParams.get("buscar")?.trim() ?? "";

  const visibles = productos.filter(
    (p) =>
      (!categoria || p.categoria === categoria) &&
      // Se busca en español y en el idioma elegido: "french press" y "prensa francesa" encuentran lo mismo
      (!buscar ||
        normalizar(`${p.nombre} ${p.descripcion} ${t.texto(p.nombre)} ${t.texto(p.descripcion)}`).includes(normalizar(buscar)))
  );

  const filtros = [{ id: null, nombre: t("tienda.todos") }, ...categorias.map((c) => ({ ...c, nombre: t.texto(c.nombre) }))];

  return (
    <main className="tienda">
      <section className="tienda-hero">
        <p className="tienda-kicker">{t("tienda.kicker")}</p>
        <h2>{t("tienda.titulo")}</h2>
        <p>{t("tienda.descripcion")}</p>
      </section>

      <div className="tienda-content">
        <nav className="tienda-filtros" aria-label={t("tienda.categorias")}>
          {filtros.map((f) => (
            <Link
              key={f.id ?? "todos"}
              to={f.id ? `/tienda?categoria=${f.id}` : "/tienda"}
              className="filtro-chip"
              aria-current={(categoria ?? null) === f.id && !buscar ? "page" : undefined}
            >
              {f.nombre}
            </Link>
          ))}
        </nav>

        {buscar && (
          <p className="tienda-busqueda">
            {t("tienda.resultados", { busqueda: buscar })} · <Link to="/tienda">{t("tienda.verTodo")}</Link>
          </p>
        )}

        {visibles.length > 0 ? (
          <div className="product-grid">
            {visibles.map((producto) => (
              <ProductCard
                key={producto.id}
                producto={producto}
                categoria={t.texto(nombreCategoria[producto.categoria])}
              />
            ))}
          </div>
        ) : (
          <div className="tienda-vacia">
            <p>{t("tienda.sinResultados")}</p>
            <Link to="/tienda" className="btn-gold">{t("tienda.verTienda")}</Link>
          </div>
        )}
      </div>
    </main>
  );
}
