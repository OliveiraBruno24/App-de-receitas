import { Drink, Meal } from './types';

const ALERT_ERROR = "Sorry, we haven't found any recipes for these filters.";

// Função para buscar receitas por ingrediente
export async function searchRecipesByIngredient(ingredient: string): Promise<Meal[]> {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
  const data = await response.json();
  // console.log('api meals ingredient: ', data);
  return data.meals;
}

// Função para buscar receitas por nome

  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
    const data = await response.json();
    console.log('api meals nome: ', data);
    if (!data.meals) {
      alert(ALERT_ERROR);
      return [];
    }
    return data.meals;
  } catch (error) {
    console.log(error);
    return [];
  }
}

// Função para buscar receitas por primeira letra
export async function searchRecipesByFirstLetter(letter: string): Promise<Meal[]> {

  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
    const data = await response.json();
    console.log('api meals letra: ', data);
    if (!data.meals) {
      alert(ALERT_ERROR);
      return [];
    }
    return data.meals;
  } catch (error) {
    console.log(error);
    return [];
  }
}

// Função para buscar Drinks por ingrediente
export async function searchDrinksByIngredient(ingredient: string): Promise<Drink[]> {

  try {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    console.log('drinks ingredinte: ', data);
    if (!data.drinks) {
      alert(ALERT_ERROR);
      return [];
    }
    return data.drinks;
  } catch (error) {
    console.log(error);
    return [];
  }
}

// Função para buscar Drinks por nome
export async function searchDrinksByName(name: string): Promise<Drink[]> {

  try {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
    const data = await response.json();
    console.log('meals ingredinte: ', data);
    if (!data.drinks) {
      alert(ALERT_ERROR);
      return [];
    }
    return data.drinks;
  } catch (error) {
    console.log(error);
    return [];
  }
}

// Função para buscar Drinks por primeira letra
export async function searchDrinksByFirstLetter(letter: string): Promise<Drink[]> {
  try {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`);
    const data = await response.json();
    return data.drinks;
  } catch (error) {
    console.log(error);
    return [];
  }
}
