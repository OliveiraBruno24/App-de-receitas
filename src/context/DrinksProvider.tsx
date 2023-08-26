import { useEffect, useState } from 'react';
import DrinksContext from './DrinksContext';
import { Drink } from '../utils/types';

type DrinksProviderType = {
  children: React.ReactNode
};

function DrinksProvider({ children }: DrinksProviderType) {
  const [drinks, setDrinks] = useState<Drink[]>([]);
  console.log('drinks', drinks);

  //   const [isId, setIsId] = useState<Drink>(0);
  //   console.log('drinksProvider: ', isId);

  useEffect(() => {
    const getDrinksInfo = async () => {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
      const data = await response.json();
      const retorno = data.drinks;
      console.log('data', retorno);
      setDrinks(data.drinks);
    //   setIsId(retorno[0].idDrink);
    };

    getDrinksInfo();
  }, []);

  const contextValue = { drinks };

  return (
    <DrinksContext.Provider value={ contextValue }>
      { children }
    </DrinksContext.Provider>
  );
}
export default DrinksProvider;
