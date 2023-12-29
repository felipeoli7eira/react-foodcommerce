import { Head } from "../../../components/Head";
import SnakeTitle from "../../../components/SnackTitle";
import { Snacks } from "../../../components/Snacks";
import { useSnack } from "../../../hooks/useSnack";

export default function Pizzas() {
  const { pizzas } = useSnack()

  return (<>
    <Head title='Pizzas' />
    <SnakeTitle>Pizzas</SnakeTitle>
    <Snacks snacks={pizzas} />
  </>);
}
