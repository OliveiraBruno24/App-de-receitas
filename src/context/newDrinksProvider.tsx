import { useContext, useEffect, useState } from 'react';
import DrinksContext from './DrinksContext';
import { Drink, Meal, SearchBarProps } from '../utils/types';
import { useLocation, useNavigate } from 'react-router-dom';
import UtilsProvider, { UtilsContext } from './UtilsContext';
import { searchDrinksByFirstLetter, searchDrinksByIngredient, searchDrinksByName, searchRecipesByFirstLetter, searchRecipesByIngredient, searchRecipesByName } from '../utils/Api';

type DrinksProviderType = {
  children: React.ReactNode
};

function DrinksProvider({ children }: DrinksProviderType) {
  const [drinks, setDrinks] = useState<Drink[]>([]);
  const [isDrink, setIsDrink] = useState<Drink[]>([]);
  const [isMeal, setIsMeal] = useState<Meal[]>([]);

  const {myQuery, searchType} = useContext(UtilsContext)

  const FIRST_LETTER = 'first-letter';
  const navigate = useNavigate();
  const location = useLocation();

  const isDrinksPage = location.pathname === '/drinks';
  const isMealsPage = location.pathname === '/meals';

  if ((isDrink.length === 1) && isDrink[0].idDrink) {
    navigate(`/drinks/${isDrink[0].idDrink}`);
    return;
  }

  if ((isMeal.length === 1) && isMeal[0].idMeal) {
    navigate(`/meals/${isMeal[0].idMeal}`);
    return;
  }

  const HandleSearch = async ({onSearch}) => {
    if (searchType === FIRST_LETTER && myQuery.length !== 1) {
      window.alert('Your search must have only 1 (one) character');
      return;
    }
    const fetchByIngredients = async () => {
      if (isDrinksPage) {
        const recipes = await searchDrinksByIngredient(myQuery);
        console.log(('fetchByIngredientsChamado2'));

        setIsDrink(recipes);
      } else if (isMealsPage) {
        const recipes = await searchRecipesByIngredient(myQuery);
        setIsMeal(recipes.map((item) => item.meals));
      }
    };
    const fetchByName = async () => {
      if (isDrinksPage) {
        const recipes = await searchDrinksByName(myQuery);
        setIsDrink(recipes);
      } else if (isMealsPage) {
        const recipes = await searchRecipesByName(myQuery);

        setIsMeal(recipes);
      }
    };
    const fetchByFistLetter = async () => {
      if (isDrinksPage) {
        const recipes = await searchDrinksByFirstLetter(myQuery);
        // const recipeId = recipes[0].idDrink;
        setIsDrink(recipes);
      } else if (isMealsPage) {
        const recipes = await searchRecipesByFirstLetter(myQuery);
        setIsMeal(recipes.map((item) => item.meals));
        // const recipeId = recipes[0].idMeal;
      }
    };
    try {
      if (searchType === 'ingredient') {
        fetchByIngredients();
      } else if (searchType === 'name') {
        fetchByName();
      } else if (searchType === FIRST_LETTER) {
        fetchByFistLetter();
      }

      onSearch(myQuery, searchType, setIsMeal, setIsDrink);
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  useEffect(() => {
    const getDrinksInfo = async () => {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
      const data = await response.json();
      setDrinks(data.drinks);
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
