export interface SearchBarProps {
  onSearch: (
    query: string,
    searchType: string,
    setIsMeal: (meals: Meal[]) => void,
    setIsDrink: (drinks: Drink[]) => void,
  ) => void;
}

export const Callback = async (
  // onSearch: SearchBarProps['onSearch'],
  onSearch: SearchBarProps,
) => {
  console.log(onSearch);
};

export type RecipeItem = Meal | Drink; // receitas ou drinks

export interface Meal {
  meals: any;
  idMeal: number;
  strMeal: string;
  isfood: string;
  strCategory: string;
  strArea:string;
  strInstructions:string;
  strMealThumb: string;
  strTags: string;
  strYoutube: string;
  isId: number;
}

export interface Drink {
  idDrink: number;
  strDrink: string;
  strCategory: string;
  strInstructions: string;
  strDrinkThumb: string;
}

export type MealsContextTypes = {
  meals: Meal[];
};

export type DrinksContextTypes = {
  drinks: Drink[];
};
