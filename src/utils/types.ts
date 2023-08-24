export interface SearchBarProps {
  // query é o conteudo da busca do user
  // searchType é o tipo baseado em radio
  onSearch: (query: string,
    searchType: string, meals: Meal[], drinks: Drink[]) => void;
}

// export type RecipeMeal = Meal[]; // apenas receitas
// export type RecipeDrink = Drink[]; // apenas drinks

export type RecipeItem = Meal | Drink; // receitas ou drinks

export interface Meal {
  idMeal: string;
  strMeal: string;
  isfood: string;
  strCategory: string;
  strArea:string;
  strInstructions:string;
  strMealThumb: string;
  strTags: string;
  strYoutube: string;
}

export interface AAAAAAAAA {
  drinks: Drink
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
