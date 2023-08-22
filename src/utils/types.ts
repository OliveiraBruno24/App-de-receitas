export interface SearchBarProps {
  // query é o conteudo da busca do user
  // searchType é o tipo baseado em radio
  onSearch: (query: string,
    searchType: string, recipes: RecipeItem[]) => void;
}

export type RecipeMeal = Meal[]; // apenas receitas
export type RecipeDrink = Drink[]; // apenas drinks

export type RecipeItem = Meal | Drink; // receitas ou drinks

export interface Meal {
  idMeal: string;
  strMeal: string;
}

export interface Drink {
  idDrink: string;
  strDrink: string;
  strCategory: string;
  strInstructions: string;
  strDrinkThumb: string;
}
