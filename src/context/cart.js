import { createContext, useContext } from "react";

export const CartContext = createContext(null);

// Da acceso al carrito desde cualquier componente: const { count, openCart } = useCart();
export function useCart() {
  const cart = useContext(CartContext);
  if (!cart) throw new Error("useCart debe usarse dentro de <CartProvider>");
  return cart;
}
