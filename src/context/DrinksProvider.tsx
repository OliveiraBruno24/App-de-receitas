import { useEffect, useState } from 'react';
import DrinksContext from './DrinksContext';
import { Drink } from '../utils/types';

type DrinksProviderType = {
  children: React.ReactNode
};

function DrinksProvider({ children }: DrinksProviderType) {
  const [drinks, setDrinks] = useState<Drink[]>([]);
  // console.log('drinks', drinks);

  useEffect(() => {
    const getDrinksInfo = async () => {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
      const data = await response.json();
      setDrinks(data.drinks);
    };

    getDrinksInfo();
  }, []);

  const contextValue = { drinks, setDrinks };

  return (
    <DrinksContext.Provider value={ contextValue }>
      { children }
    </DrinksContext.Provider>
  );
}
export default DrinksProvider;
