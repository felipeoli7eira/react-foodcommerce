import { useEffect, useState } from "react";
import { Head } from "../../../components/Head";
import SnakeTitle from "../../../components/SnackTitle";
import { Snacks } from "../../../components/Snacks";
import { getPizzas } from "../../../services/api";
import { SnackInterface } from "../../../interfaces/Snack/SnackInterface";

export default function Pizzas() {
  const [pizzas, setPizzas] = useState<SnackInterface[]>([]);

  useEffect(() => {
    try
    {
      (async () => {
        const response = await getPizzas();

        setPizzas(response.data);
      })()
    }
    catch(error)
    {
      console.log(error);
    }
  }, []);

  return (<>
    <Head title='Pizzas' />
    <SnakeTitle>Pizzas</SnakeTitle>
    <Snacks snacks={pizzas} />
  </>);
}
