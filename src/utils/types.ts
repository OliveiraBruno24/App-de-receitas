export interface SearchBarProps {
  setSearchBarInput(arg0: string): unknown;
  onSearch: (
    query: string,
    searchType: string,
    setIsMeal: (meals: Meal[]) => void,
    setIsDrink: (drinks: Drink[]) => void,
  ) => void;
}

export interface Meal {
  meals: any;
  idMeal: string;
  strMeal: string;
  isfood: string;
  strCategory: string;
  strArea:string;
  strInstructions:string;
  strMealThumb: string;
  strTags: string;
  strYoutube: string;
  // isId: number;
}

export interface Drink {
  idDrink: string;
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

export type FavoriteRecipesTypes = {
  image: string;
  name: string;
  alcoholicOrNot: string;
  nationality: string;
  category: string;
  id: string;
  type: string;
};
