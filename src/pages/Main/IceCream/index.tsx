import { useEffect, useState } from "react";
import { Head } from "../../../components/Head";
import SnakeTitle from "../../../components/SnackTitle";
import { Snacks } from "../../../components/Snacks";
import { getIceCreams } from "../../../services/api";

export default function IceCream() {
  const [iceCreams, setIceCreams] = useState([]);

  useEffect(() => {
    try
    {
      (async () => {
        const response = await getIceCreams();

        setIceCreams(response.data);
      })()
    }
    catch(error)
    {
      console.log(error);
    }
  }, []);

  return (<>
    <Head title='Sobremesas' />
    <SnakeTitle>Sobremesas</SnakeTitle>
    <Snacks snacks={iceCreams} />
  </>);
}
