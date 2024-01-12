import { useCart } from "../../../../hooks/useCart";
import TableDesktop from "./TableDesktop";

export default function Table() {
  const { cart } = useCart();

  if (cart?.length === 0) {
    return <h1>Nenhum item no carrinho</h1>;
  }

  return (<TableDesktop></TableDesktop>);
};
