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
  setMeals: React.Dispatch<React.SetStateAction<Meal[]>>
};

export type DrinksContextTypes = {
  drinks: Drink[];
  setDrinks: React.Dispatch<React.SetStateAction<Drink[]>>
};

export type UtilsContextTypes = {
  myQuery: string;
  setMyQuery: React.Dispatch<React.SetStateAction<string>>;
  searchType: string;
  setSearchType: React.Dispatch<React.SetStateAction<string>>;
  isMeal: boolean;
  setIsMeal:React.Dispatch<React.SetStateAction<boolean>>
};

export type FavoriteAndDoneRecipes = {
  id: string,
  type: string,
  nationality: string,
  category:string,
  alcoholicOrNot: string,
  name: string,
  image:string,
  doneDate: string,
  tags: string,
};
