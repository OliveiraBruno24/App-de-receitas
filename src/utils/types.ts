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
}

export interface Drink {
  idDrink: string;
  strDrink: string;
  strCategory: string;
  strInstructions: string;
  strDrinkThumb: string;
  strArea: string,
  strAlcoholic: string

}

export type MealsContextTypes = {
  meals: Meal[];
  setMeals: React.Dispatch<React.SetStateAction<Meal[]>>
  mealsContext: Meal[];
  setMealsContext:React.Dispatch<React.SetStateAction<Meal[]>>
  favMeals: Meal[];
  setFavMeals:React.Dispatch<React.SetStateAction<Meal[]>>
};

export type DrinksContextTypes = {
  drinks: Drink[];
  setDrinks: React.Dispatch<React.SetStateAction<Drink[]>>
  recipeContext:Drink[];
  setRecipeContext:React.Dispatch<React.SetStateAction<Drink[]>>
  favDrinks: Drink[];
  setFavDrinks:React.Dispatch<React.SetStateAction<Drink[]>>
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

export type MealRecipe = {
  dateModified: string | null;
  idMeal: string;
  strArea: string;
  strCategory: string;
  strCreativeCommonsConfirmed: string | null;
  strDrinkAlternate: string | null;
  strImageSource: string | null;
  strIngredient1: string;
  strIngredient2: string | null;
  strIngredient3: string | null;
  strIngredient4: string | null;
  strIngredient5: string | null;
  strIngredient6: string | null;
  strIngredient7: string | null;
  strIngredient8: string | null;
  strIngredient9: string | null;
  strIngredient10: string | null;
  strIngredient11: string | null;
  strIngredient12: string | null;
  strIngredient13: string | null;
  strIngredient14: string | null;
  strIngredient15: string | null;
  strMeasure1: string;
  strMeasure2: string | null;
  strMeasure3: string | null;
  strMeasure4: string | null;
  strMeasure5: string | null;
  strMeasure6: string | null;
  strMeasure7: string | null;
  strMeasure8: string | null;
  strMeasure9: string | null;
  strMeasure10: string | null;
  strMeasure11: string | null;
  strMeasure12: string | null;
  strMeasure13: string | null;
  strMeasure14: string | null;
  strMeasure15: string | null;
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
  strSource: string;
  strTags: string;
  strYoutube: string;
};

export type DrinkRecipe = {
  dateModified: string;
  idDrink: string;
  strAlcoholic: string;
  strCategory: string;
  strCreativeCommonsConfirmed: string;
  strDrink: string;
  strDrinkAlternate: string | null;
  strDrinkThumb: string;
  strGlass: string;
  strIBA: string | null;
  strImageAttribution: string | null;
  strImageSource: string | null;
  strIngredient1: string;
  strIngredient2: string | null;
  strIngredient3: string | null;
  strIngredient4: string | null;
  strIngredient5: string | null;
  strIngredient6: string | null;
  strIngredient7: string | null;
  strIngredient8: string | null;
  strIngredient9: string | null;
  strIngredient10: string | null;
  strIngredient11: string | null;
  strIngredient12: string | null;
  strIngredient13: string | null;
  strIngredient14: string | null;
  strIngredient15: string | null;
  strInstructions: string;
  strInstructionsDE: string;
  strInstructionsES: string | null;
  strInstructionsFR: string | null;
  strInstructionsIT: string;
  strInstructionsZH_HANS: string | null;
  strInstructionsZH_HANT: string | null;
  strMeasure1: string;
  strMeasure2: string | null;
  strMeasure3: string | null;
  strMeasure4: string | null;
  strMeasure5: string | null;
  strMeasure6: string | null;
  strMeasure7: string | null;
  strMeasure8: string | null;
  strMeasure9: string | null;
  strMeasure10: string | null;
  strMeasure11: string | null;
  strMeasure12: string | null;
  strMeasure13: string | null;
  strMeasure14: string | null;
  strMeasure15: string | null;
  strTags: string | null;
  strVideo: string | null;
};
