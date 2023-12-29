import { Head } from "../../../components/Head";
import SnakeTitle from "../../../components/SnackTitle";
import { Snacks } from "../../../components/Snacks";
import { useSnack } from "../../../hooks/useSnack";

export default function Drinks() {

  const { drinks } = useSnack()

  return (<>
    <Head title='Bebidas' />
    <SnakeTitle>Bebidas</SnakeTitle>
    <Snacks snacks={drinks} />
  </>);
}
