import { createContext, useState, useEffect } from 'react'

import { SnackInterface } from './../../interfaces/Snack/SnackInterface'
import { getBurguers, getDrinks, getIceCreams, getPizzas } from './../../services/api'


export interface SnackContextPropsInterface {
  burgers: SnackInterface[];
  pizzas: SnackInterface[];
  drinks: SnackInterface[];
  iceCreams: SnackInterface[];
}

export interface SnackProviderInterface {
  children?: React.ReactNode;
}

export const SnackContext = createContext({} as SnackContextPropsInterface)

export function SnackProvider({ children }: SnackProviderInterface) {
  const [burgers, setBurgers] = useState<SnackInterface[]>([]);
  const [pizzas, setPizzas] = useState<SnackInterface[]>([]);
  const [drinks, setDrinks] = useState<SnackInterface[]>([]);
  const [iceCreams, setIceCreams] = useState<SnackInterface[]>([]);

  useEffect(() => {
    try
    {
      (async () => {
        const BurgersRequest = await getBurguers();
        const pizzasRequest = await getPizzas();
        const drinksRequest = await getDrinks();
        const iceCreamsRequest = await getIceCreams();

        const [
          { data: BurgersResponse },
          { data: pizzasResponse },
          { data: drinksResponse },
          { data: iceCreamsResponse }
        ] = await Promise.all([BurgersRequest, pizzasRequest, drinksRequest, iceCreamsRequest]);

        setBurgers(BurgersResponse);
        setPizzas(pizzasResponse);
        setDrinks(drinksResponse);
        setIceCreams(iceCreamsResponse);
      })()
    }
    catch(error)
    {
      console.log(error);
    }
  }, []);

  return (
    <SnackContext.Provider value={{burgers, pizzas, drinks, iceCreams}}>
      {children}
  </SnackContext.Provider>
  )
}
