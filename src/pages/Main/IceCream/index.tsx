import { Head } from "../../../components/Head";
import SnakeTitle from "../../../components/SnackTitle";
import { Snacks } from "../../../components/Snacks";
import { useSnack } from "../../../hooks/useSnack";

export default function IceCream() {
  const { iceCreams } = useSnack()

  return (<>
    <Head title='Sobremesas' />
    <SnakeTitle>Sobremesas</SnakeTitle>
    <Snacks snacks={iceCreams} />
  </>);
}
