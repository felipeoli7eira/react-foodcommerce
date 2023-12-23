import { Head } from "../../../components/Head";
import SnakeTitle from "../../../components/SnackTitle";
import { Snacks } from "../../../components/Snacks";

export default function Drinks() {
  const data = [
    {
      id: 1,
      snack: 'drink',
      name: 'Cola-Cola',
      description: '...',
      price: 3.59,
      image: 'https://www.coca-cola.com/content/dam/onexp/br/pt/brands/coca-cola/brazil_pt_coca_cola_original_750x750.jpg/width1024.jpg'
    },
  ];

  return (<>
    <Head title='Bebidas' />
    <SnakeTitle>Bebidas</SnakeTitle>
    <Snacks snacks={data} />
  </>);
}
