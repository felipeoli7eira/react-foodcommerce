import { currencyBRLFormat } from "../../../../../helpers/currencyBRLFormat";
import { useCart } from "../../../../../hooks/useCart";
import { Container } from "./style"

export default function TableDesktop() {
  const { cart } = useCart();

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
                {item.quantity}
              </td>
              <td>
                {currencyBRLFormat(item.subtotal)}
              </td>
              <td>
                {''}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};
