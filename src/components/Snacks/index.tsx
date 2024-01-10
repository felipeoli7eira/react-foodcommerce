import { currencyBRLFormat } from "../../helpers/currencyBRLFormat";
import { useCart } from "../../hooks/useCart";
import { SnackInterface } from "../../interfaces/Snack/SnackInterface";
import SkeletonSnack from "./SkeletonSnack";
import { Container } from "./styles";
import { FiPlus } from "react-icons/fi";

interface SnackPropsInterface {
  snacks: SnackInterface[];
}

export function Snacks({ snacks }: SnackPropsInterface) {

  const { addToCart, cart } = useCart();

  const Skeletons = () => {
    return (<>
      <SkeletonSnack />
      <SkeletonSnack />
      <SkeletonSnack />
      <SkeletonSnack />
    </>);
  };

  return (
    <Container>
      {
        !snacks.length ?
          <Skeletons />
        :
          (snacks.map(snack => {
            const snackExistent = cart.find(
              cart_item => cart_item.id === snack.id && cart_item.snack === snack.snack
            )
            return (
              <div key={snack.id} className="snack-container">
                {snackExistent && (
                  <span className="quantity">{snackExistent.quantity}</span>
                )}

                <h2>{snack.name}</h2>
                <img src={snack.image} alt={snack.description} loading="lazy" />
                <p>{snack.description}</p>
                <div>
                  <strong>{currencyBRLFormat(snack.price)}</strong>
                  <button type="button" onClick={() => addToCart(snack)}>
                    <FiPlus />
                  </button>
                </div>
              </div>
            )
          }))
      }
    </Container>
  );
}
