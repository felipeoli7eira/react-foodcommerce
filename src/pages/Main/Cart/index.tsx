import { Head } from "../../../components/Head";
import { OrderHeader } from "../../../components/MyOrders/OrderHeader";
import { Container } from "./styles";

export default function Cart() {
  return (
    <Container>
      <Head title="Carrinho" />

      <OrderHeader />
    </Container>
  );
};
