import { useEffect, useState } from 'react';
import MealsContext from './MealsContext';
import { Meal } from '../utils/types';

type MealsProviderType = {
  children:React.ReactNode
  // togglePage: () => void
};

function MealsProvider({ children }: MealsProviderType) {
  const [meals, setMeals] = useState<Meal[]>([]);
  const [page, setPage] = useState<'meals' | 'drinks'>('meals');

  useEffect(() => {
    const getMealsInfo = async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      const data = await response.json();
      // console.log('data', data);

      setMeals(data.meals);
    };

    getMealsInfo();
  }, []);

  const togglePage = () => {
    setPage(page === 'meals' ? 'drinks' : 'meals');
  };

  const contextValue = { meals };
  const contextPage = page;
  return (
    <MealsContext.Provider value={ contextValue }>
      {children}
    </MealsContext.Provider>
  );
}
export default MealsProvider;
