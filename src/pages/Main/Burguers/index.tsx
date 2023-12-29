import { useContext } from 'react';
import { Head } from '../../../components/Head'
import SnakeTitle from '../../../components/SnackTitle';
import { Snacks } from '../../../components/Snacks';
import { SnackContext } from '../../../contexts/SnackContext';

export default function Burguers() {
  const { burgers } = useContext(SnackContext)

  return (<>
    <Head title='Hambúrguers' />
    <SnakeTitle>Hambúrguers</SnakeTitle>

    <Snacks snacks={burgers} />
  </>);
}
