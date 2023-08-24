import { Drink, Meal } from './types';

export const Callback = async (
  query: string,
  searchType: string,
  // recipes: RecipeItem[],
  setIsMeal: (meals: Meal[]) => void,
  setIsDrink: (drinks: Drink[]) => void,
) => {
  console.log(query);
  console.log(searchType);
  console.log(setIsMeal);
  console.log(setIsDrink);
};
