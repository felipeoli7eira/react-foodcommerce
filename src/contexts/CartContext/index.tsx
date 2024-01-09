import { createContext, ReactNode, useState } from 'react'
import { SnackInterface } from '../../interfaces/Snack/SnackInterface';

interface SnackPropsInterface extends SnackInterface {
  quantity: number;
  subtotal: number;
}

interface UpdateCartPropsInterface {
  id: string;
  snack: string;
  newQuantity: number;
}

interface RemoveItemCartPropsInterface {
  id: string;
  item: string;
}

interface CartContextPropsInterface {
  cart: SnackPropsInterface[];
  addToCart(snack: SnackInterface): void;
  // updateCart({id, snack, newQuantity}: UpdateCartPropsInterface): void;
  // removeFromCart({id, item}: RemoveItemCartPropsInterface): void;
}

export const CartContext = createContext({} as CartContextPropsInterface);

interface CartProviderPropsInterface {
  children: ReactNode;
}
export function CartProvider({ children }: CartProviderPropsInterface) {
  const [cart, setCart] = useState<SnackPropsInterface[]>([]);

  function addToCart(item: SnackInterface): void {
    const newItem = { ...item, quantity: 1, subtotal: item.price };
    const cloneCart = [...cart, newItem];

    console.clear();
    console.log(cloneCart);

    setCart(cloneCart);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}
