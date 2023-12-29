import { useContext } from "react";
import { Head } from "../../../components/Head";
import SnakeTitle from "../../../components/SnackTitle";
import { Snacks } from "../../../components/Snacks";
import { SnackContext } from '../../../contexts/SnackContext';

export default function IceCream() {
  const { iceCreams } = useContext(SnackContext)

  return (<>
    <Head title='Sobremesas' />
    <SnakeTitle>Sobremesas</SnakeTitle>
    <Snacks snacks={iceCreams} />
  </>);
}
