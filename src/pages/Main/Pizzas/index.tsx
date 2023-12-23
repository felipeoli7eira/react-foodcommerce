import { Head } from "../../../components/Head";
import SnakeTitle from "../../../components/SnackTitle";
import { Snacks } from "../../../components/Snacks";

export default function Pizzas() {
  const data = [
    {
      id: 1,
      snack: 'pizza',
      name: 'Pizza',
      description: '...',
      price: 51.59,
      image: 'https://blog.duogourmet.com.br/wp-content/uploads/2019/07/41-Duo-Gourmet-pizza.jpg'
    },
  ];

  return (<>
    <Head title='Pizzas' />
    <SnakeTitle>Pizzas</SnakeTitle>
    <Snacks snacks={data} />
  </>);
}
