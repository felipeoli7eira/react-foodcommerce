import { createContext, ReactNode, useState } from 'react'
import { SnackInterface } from '../../interfaces/Snack/SnackInterface';
import { toast } from 'react-toastify';
import snackEmoji from '../../helpers/snackEmoji';

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
  addToCart: (snack: SnackInterface) => void;
  removeFromCart: (snack: SnackInterface) => void;
  updateCart: (snack: SnackInterface) => void;
  incrementItem: (snack: SnackInterface) => void;
  decrementItem: (snack: SnackInterface) => void;
}

export const CartContext = createContext({} as CartContextPropsInterface);

interface CartProviderPropsInterface {
  children: ReactNode;
}
export function CartProvider({ children }: CartProviderPropsInterface) {
  const [cart, setCart] = useState<SnackPropsInterface[]>([]);

  function addToCart(item: SnackInterface): void {
    const snackExistsIntoCart = cart.find(
      cart_item => cart_item.snack === item.snack && cart_item.id === item.id
    );

    console.clear()

    // update cart
    if (snackExistsIntoCart) {
      console.log('update cart')
      const updatedCart = cart.map(cart_item => {
        if (cart_item.id === item.id) {
          cart_item.quantity += 1;
          cart_item.subtotal = cart_item.quantity * cart_item.price;
        }

        return cart_item;
      });

      setCart(updatedCart);
      console.log(updatedCart);
      return
    }

    console.log('add cart')
    // add into cart
    const newItem = { ...item, quantity: 1, subtotal: item.price };
    const cloneCart = [...cart, newItem];

    setCart(cloneCart);
    toast.success(snackEmoji(item.snack).concat(' ', item.name, ' adicionado(a).'));
  }

  function updateCart(snack: SnackInterface) {
    return;
  }

  function removeFromCart(snack: SnackInterface) {
    const newCartItems = cart.filter(
      (item: SnackPropsInterface) => !(item.id === snack.id && item.snack === snack.snack),
    )

    setCart(newCartItems);
  }

  function incrementItem(snack: SnackInterface) {
    // updateCart(id, snack, snack?.quantity + 1);
    return
  }

  function decrementItem(snack: SnackInterface) {
    // updateCart(id, snack, snack?.quantity - 1);
    return
  }

  // function confirmOrder() {}

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      updateCart,
      removeFromCart,
      incrementItem,
      decrementItem,
    }}>
      {children}
    </CartContext.Provider>
  )
}
