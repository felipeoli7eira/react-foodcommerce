import { currencyBRLFormat } from "../../helpers/currencyBRLFormat";
import { Container } from "./styles";
import { FiPlus } from "react-icons/fi";

interface SnackObjectInterface {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
}

interface SnackInterface {
  snacks: SnackObjectInterface[];
}

export function Snacks({ snacks }: SnackInterface) {

  return (
    <Container>
      {
        snacks.map(snack => (
          <div key={snack.id} className="snack-container">
            <h2>{snack.name}</h2>
            <img src={snack.image} alt={snack.description} loading="lazy" />
            <p>{snack.description}</p>
            <div>
              <strong>{currencyBRLFormat(snack.price)}</strong>
              <button type="button">
                <FiPlus />
              </button>
            </div>
          </div>
        ))
      }
    </Container>
  );
}
