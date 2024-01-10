import { useCart } from "../../hooks/useCart"
import { ButtonGoToCartDetails } from "./styles";
import { ReactComponent as CartIcon } from "../../assets/svg/shopping-cart.svg";

export default function MyOrders() {

  const { cart } = useCart();

  return <ButtonGoToCartDetails to={''}>
    <span>Meu pedido</span>
    <CartIcon />

    {cart.length > 0 && <span>{cart.length.toString().padStart(2, '0')}</span>}
  </ButtonGoToCartDetails>;
};
