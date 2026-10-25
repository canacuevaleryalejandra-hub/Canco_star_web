const pesos = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0,
});

// 37000 → "$ 37.000"
export function formatPrice(value) {
  return pesos.format(value);
}
