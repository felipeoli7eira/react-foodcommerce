import { currencyBRLFormat } from "../../../../../helpers/currencyBRLFormat";
import { useCart } from "../../../../../hooks/useCart";
import { Container } from "./style"
import plusImage from '../../../../../assets/svg/circle-plus.svg';
import minusImage from '../../../../../assets/svg/circle-minus.svg';
import { GoTrash } from "react-icons/go";


export default function TableDesktop() {
  const { cart, removeFromCart } = useCart();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Lanche</th>
            <th>Quantidade</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {cart?.length && cart.map((item, index) => (
            <tr key={item.snack.concat('-', index.toString())}>
              <td>
                <img src={item.image} alt={item.name}  />
              </td>
              <td>
                {item.name}
                {/* <span>{item.price}</span> */}
              </td>
              <td>
                <div className="quantity-controller">
                  <button type="button" onClick={() => console.log('adicionar 1')}>
                    {/* <img src={plusImage} alt="adicionar quantidade" /> */} +
                  </button>
                  <span>
                    {item.quantity.toString().padStart(2, '0')}
                  </span>
                  <button type="button" onClick={() => console.log('remover 1')}>
                    {/* <img src={minusImage} alt="remover quantidade" /> */} -
                  </button>
                </div>
              </td>
              <td>
                <span>{currencyBRLFormat(item.subtotal)}</span>
              </td>
              <td>
                <button type="button" onClick={() => removeFromCart(item)}>
                  <GoTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};
