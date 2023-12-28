import { useEffect, useState } from "react";
import { Head } from "../../../components/Head";
import SnakeTitle from "../../../components/SnackTitle";
import { Snacks } from "../../../components/Snacks";
import { getDrinks } from "../../../services/api";
import { SnackInterface } from "../../../interfaces/Snack/SnackInterface";

export default function Drinks() {
  const [drinks, setDrinks] = useState<SnackInterface[]>([]);

  useEffect(() => {
    try
    {
      (async () => {
        const response = await getDrinks();

        setDrinks(response.data);
      })()
    }
    catch(error)
    {
      console.log(error);
    }
  }, []);

  return (<>
    <Head title='Bebidas' />
    <SnakeTitle>Bebidas</SnakeTitle>
    <Snacks snacks={drinks} />
  </>);
}
