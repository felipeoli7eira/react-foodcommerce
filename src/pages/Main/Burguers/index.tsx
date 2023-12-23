import { Head } from '../../../components/Head'
import SnakeTitle from '../../../components/SnackTitle';
import { Snacks } from '../../../components/Snacks';

export default function Burguers() {

  const data = [
    {
      id: 1,
      snack: 'burguer',
      name: 'Extra Bacon',
      description: '...',
      price: 20.59,
      image: 'https://s2-casavogue.glbimg.com/Rj1yfI9_aiPoU1yOjEqYg3m4nHw=/0x0:2048x1365/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_d72fd4bf0af74c0c89d27a5a226dbbf8/internal_photos/bs/2022/p/X/eb4KQdToys327cGqnRGg/receita-ceboloni-bacon.jpg'
    },
    {
      id: 2,
      snack: 'burguer',
      name: 'Combo Burguer',
      description: '...',
      price: 25.59,
      image: 'https://supermercadosrondon.com.br/guiadecarnes/images/postagens/quer_fazer_hamburger_artesanal_perfeito_2019-05-14.jpg'
    },
  ];

  return (<>
    <Head title='Hambúrguers' />
    <SnakeTitle>Hambúrguers</SnakeTitle>

    <Snacks snacks={data} />
  </>);
}
