export interface SearchBarProps {
  onSearch: (
    query: string, // consulta de busca.
    searchType: string, // tipo de busca, ingredientes, nome ou first letter
    setIsMeal: (meals: Meal[]) => void,
    /* função que recebe um array de (Meal[] ou
    Drink[]) como argumento e não retorna nada. */
    setIsDrink: (drinks: Drink[]) => void,
  ) => void; // sem retorno
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

export type FavoriteAndDoneRecipes = {
  id: string,
  type: string,
  nationality: string,
  category:string,
  alcoholicOrNot: string,
  name: string,
  image:string,
  doneDate: string,
  tags: string[],
};
