export interface SearchBarProps {
  // query é o conteúdo da busca do usuário
  // searchType é o tipo baseado em rádio
  onSearch: (
    query: string,
    searchType: string,
    setIsMeal: (meals: Meal[]) => void,
    setIsDrink: (drinks: Drink[]) => void,
    isID: number,
  ) => void;
}

// export type RecipeMeal = Meal[]; // apenas receitas
// export type RecipeDrink = Drink[]; // apenas drinks

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
