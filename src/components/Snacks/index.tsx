import { currencyBRLFormat } from "../../helpers/currencyBRLFormat";
import { SnackInterface } from "../../interfaces/Snack/SnackInterface";
import SkeletonSnack from "./SkeletonSnack";
import { Container } from "./styles";
import { FiPlus } from "react-icons/fi";

interface SnackPropsInterface {
  snacks: SnackInterface[];
}

export function Snacks({ snacks }: SnackPropsInterface) {

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
          (snacks.map(snack => (
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
          )))
      }
    </Container>
  );
}
