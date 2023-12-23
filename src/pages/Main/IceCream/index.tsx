import { Head } from "../../../components/Head";
import SnakeTitle from "../../../components/SnackTitle";
import { Snacks } from "../../../components/Snacks";

export default function IceCream() {
  const data = [
    {
      id: 1,
      snack: 'cookie',
      name: 'Bolo de pote',
      description: '...',
      price: 11.59,
      image: 'https://saboreiereceitas.com.br/thumbnails/2-tipos-de-sobremesas-bombom-no-pote-com-a-mesma-base-delicias-da-thata-9_9YCWc8OEI.jpg'
    },
  ];

  return (<>
    <Head title='Sobremesas' />
    <SnakeTitle>Sobremesas</SnakeTitle>
    <Snacks snacks={data} />
  </>);
}
