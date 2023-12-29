import { useContext } from "react";
import { Head } from "../../../components/Head";
import SnakeTitle from "../../../components/SnackTitle";
import { Snacks } from "../../../components/Snacks";
import { SnackContext } from '../../../contexts/SnackContext';

export default function Pizzas() {
  const { pizzas } = useContext(SnackContext)

  return (<>
    <Head title='Pizzas' />
    <SnakeTitle>Pizzas</SnakeTitle>
    <Snacks snacks={pizzas} />
  </>);
}
