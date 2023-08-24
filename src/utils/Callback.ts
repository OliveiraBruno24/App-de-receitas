import { Drink, Meal } from './types';

export const Callback = async (
  query: string,
  searchType: string,
  // recipes: RecipeItem[],
  meals: Meal[],
  drinks: Drink[],
) => {
  console.log(query);
  console.log(searchType);
  console.log(meals);
  console.log(drinks);
};
