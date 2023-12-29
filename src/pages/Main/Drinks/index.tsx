import { useContext } from "react";
import { Head } from "../../../components/Head";
import SnakeTitle from "../../../components/SnackTitle";
import { Snacks } from "../../../components/Snacks";
import { SnackContext } from '../../../contexts/SnackContext';

export default function Drinks() {

  const { drinks } = useContext(SnackContext)

  return (<>
    <Head title='Bebidas' />
    <SnakeTitle>Bebidas</SnakeTitle>
    <Snacks snacks={drinks} />
  </>);
}
