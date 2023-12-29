import { Head } from '../../../components/Head'
import SnakeTitle from '../../../components/SnackTitle';
import { Snacks } from '../../../components/Snacks';
import { useSnack } from '../../../hooks/useSnack';

export default function Burguers() {
  const { burgers } = useSnack()

  return (<>
    <Head title='Hambúrguers' />
    <SnakeTitle>Hambúrguers</SnakeTitle>

    <Snacks snacks={burgers} />
  </>);
}
