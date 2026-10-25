import { useCallback, useEffect, useState } from "react";
import { CartContext } from "./cart";

const STORAGE_KEY = "canco-carrito";

function loadItems() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [];
  } catch {
    return [];
  }
}

// Guarda el carrito para toda la página: qué productos hay y si el panel lateral está abierto.
// Cada producto: { id, nombre, presentacion, precio, imagen, cantidad }.
// El "id" debe incluir la presentación (por ejemplo "grano-250g") para que 250 g y 500 g vayan por separado.
export function CartProvider({ children }) {
  const [items, setItems] = useState(loadItems);
  const [isOpen, setIsOpen] = useState(false);

  // El carrito se guarda en el navegador para que no se pierda al recargar
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Sin almacenamiento disponible: el carrito dura hasta recargar la página
    }
  }, [items]);

  const addItem = useCallback((product, cantidad = 1) => {
    setItems((current) => {
      const existing = current.find((item) => item.id === product.id);
      if (existing) {
        return current.map((item) =>
          item.id === product.id ? { ...item, cantidad: item.cantidad + cantidad } : item
        );
      }
      return [...current, { ...product, cantidad }];
    });
  }, []);

  const removeItem = useCallback((id) => {
    setItems((current) => current.filter((item) => item.id !== id));
  }, []);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const count = items.reduce((sum, item) => sum + item.cantidad, 0);
  const total = items.reduce((sum, item) => sum + item.precio * item.cantidad, 0);

  return (
    <CartContext.Provider
      value={{ items, count, total, addItem, removeItem, isOpen, openCart, closeCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
