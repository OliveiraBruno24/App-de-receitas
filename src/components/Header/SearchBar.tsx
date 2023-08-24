/* eslint-disable complexity */
/* eslint-disable react-func/max-lines-per-function */
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// Api
import {
  searchRecipesByIngredient,
  searchRecipesByName,
  searchRecipesByFirstLetter,
  searchDrinksByName,
  searchDrinksByFirstLetter,
  searchDrinksByIngredient,
} from '../../utils/Api';

// tipagem
import { Drink, Meal, SearchBarProps } from '../../utils/types';
import Footer from '../Footer/Footer';

/* onSearch é o callback q manda as informações p
componente pai (App), p saber oq foi pesquisado */
function SearchBar({ onSearch }: SearchBarProps) {
  const FIRST_LETTER = 'first-letter';
  const navigate = useNavigate();

  const [myQuery, setMyQuery] = useState('');
  // console.log('query', myQuery);
  const [searchType, setSearchType] = useState('ingredient');
  // console.log('type', searchType);

  const [isDrink, setIsDrink] = useState<Drink[]>([]);
  const [isMeal, setIsMeal] = useState<Meal[]>([]);
  const [isID, setIsID] = useState(0);
  console.log('oi', isID);

  // PRECISO QUE MEU ISID 

  const HandleSearch = async () => {
    const isDrinksPage = location.pathname === '/drinks';
    const isMealsPage = location.pathname === '/meals';

    // caso a pesquisa tenha mais de um caractere
    if (searchType === FIRST_LETTER && myQuery.length !== 1) {
      window.alert('Your search must have only 1 (one) character');
    }

    if (searchType === 'ingredient') {
      if (isDrinksPage) {
        const recipes = await searchDrinksByIngredient(myQuery);
        console.log('recipes ingredient drink: ', recipes);

        const recipeId = recipes[0].idDrink;
        console.log(recipeId);
        setIsID(recipes[0].idDrink);

        if (isDrink.length !== 1) {
          navigate(`/${isDrinksPage ? 'drinks' : 'meals'}/${recipeId}`);
          console.log('Redirecionamento DRINK = 1 concluído');
          return; // Redirecionado, não precisa continuar a busca
        }

        setIsDrink(recipes);
      } else if (isMealsPage) {
        const recipesFood = await searchRecipesByIngredient(myQuery);
        console.log('recipes ingredient FOOD: ', recipesFood);

        const recipeId = recipesFood[0].idMeal;
        console.log('recipes ID ingredient FOOD: ', recipeId);

        if (isMeal.length === 1) {
          navigate(`/${isDrinksPage ? 'drinks' : 'meals'}/${recipeId}`);
          console.log('Redirecionamento FOOD = 1 concluído');
          return; // Redirecionado, não precisa continuar a busca
        }
        setIsMeal(recipesFood.map((item) => item.meals));
      }
    } else if (searchType === 'name') {
      if (isDrinksPage) {
        const recipes = await searchDrinksByName(myQuery);
        const recipeId = recipes[0].idDrink;

        if (isDrink.length === 1) {
          navigate(`/${isDrinksPage ? 'drinks' : 'meals'}/${recipeId}`);
          return; // Redirecionado, não precisa continuar a busca
        }
        setIsDrink(recipes);
      } else if (isMealsPage) {
        const recipesFood = await searchRecipesByName(myQuery);
        const recipeId = recipesFood[0].idMeal;

        if (isMeal.length === 1) {
          navigate(`/${isDrinksPage ? 'drinks' : 'meals'}/${recipeId}`);
          return; // Redirecionado, não precisa continuar a busca
        }
        setIsMeal(recipesFood.map((item) => item.meals));
      }
    } if (searchType === FIRST_LETTER) {
      if (isDrinksPage) {
        const recipes = await searchDrinksByFirstLetter(myQuery);
        const recipeId = recipes[0].idDrink;

        if (isDrink.length === 1) {
          navigate(`/${isDrinksPage ? 'drinks' : 'meals'}/${recipeId}`);
          return; // Redirecionado, não precisa continuar a busca
        }
        setIsDrink(recipes);
      } else if (isMealsPage) {
        const recipesFood = await searchRecipesByFirstLetter(myQuery);
        const recipeId = recipesFood[0].idMeal;

        if (isMeal.length === 1) {
          navigate(`/${isDrinksPage ? 'drinks' : 'meals'}/${recipeId}`);
          return; // Redirecionado, não precisa continuar a busca
        }
        setIsMeal(recipesFood.map((item) => item.meals));
      }
    }

    onSearch(myQuery, searchType, setIsMeal, setIsDrink, isID);
  };

  const location = useLocation();

  return (
    <div>

      <input
        data-testid="search-input"
        type="text"
        value={ myQuery }
        onChange={ (e) => setMyQuery(e.target.value) }
        placeholder="Search"
      />

      <div>
        <label>
          <input
            data-testid="ingredient-search-radio"
            type="radio"
            value="ingredient"
            checked={ searchType === 'ingredient' }
            onChange={ () => setSearchType('ingredient') }
          />
          Ingredient
        </label>

        <label>
          <input
            data-testid="name-search-radio"
            type="radio"
            value="name"
            checked={ searchType === 'name' }
            onChange={ () => setSearchType('name') }
          />
          Name
        </label>

        <label>
          <input
            data-testid="first-letter-search-radio"
            type="radio"
            value={ FIRST_LETTER }
            checked={ searchType === FIRST_LETTER }
            onChange={ () => setSearchType(FIRST_LETTER) }
          />
          First Letter
        </label>
      </div>

      <button data-testid="exec-search-btn" onClick={ HandleSearch }>
        Search
      </button>
      <Footer />
    </div>
  );
}

export default SearchBar;
