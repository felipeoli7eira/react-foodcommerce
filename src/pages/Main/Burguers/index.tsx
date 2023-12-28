import { useEffect, useState } from 'react';
import { Head } from '../../../components/Head'
import SnakeTitle from '../../../components/SnackTitle';
import { Snacks } from '../../../components/Snacks';
import { getBurguers } from '../../../services/api';
import { SnackInterface } from '../../../interfaces/Snack/SnackInterface';

export default function Burguers() {
  const [burgers, setBurgers] = useState<SnackInterface[]>([]);

  useEffect(() => {
    try
    {
      (async () => {
        const response = await getBurguers();

        setBurgers(response.data);
      })()
    }
    catch(error)
    {
      console.log(error);
    }
  }, []);

  return (<>
    <Head title='Hambúrguers' />
    <SnakeTitle>Hambúrguers</SnakeTitle>

    <Snacks snacks={burgers} />
  </>);
}
