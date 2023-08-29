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
  const location = useLocation();

  const [myQuery, setMyQuery] = useState('');
  const [searchType, setSearchType] = useState('ingredient');
  const [isDrink, setIsDrink] = useState<Drink[]>([]);
  const [isMeal, setIsMeal] = useState<Meal[]>([]);

  const isDrinksPage = location.pathname === '/drinks';
  const isMealsPage = location.pathname === '/meals';

  if ((isDrink.length === 1) && isDrink[0].idDrink) {
    navigate(`/drinks/${isDrink[0].idDrink}`);
    return;
  }

  if ((isMeal.length === 1) && isMeal[0].idMeal) {
    navigate(`/meals/${isMeal[0].idMeal}`);
    return;
  }

  const HandleSearch = async () => {
    if (searchType === FIRST_LETTER && myQuery.length !== 1) {
      window.alert('Your search must have only 1 (one) character');
      return;
    }
    const fetchByIngredients = async () => {
      if (isDrinksPage) {
        const recipes = await searchDrinksByIngredient(myQuery);
        console.log(('fetchByIngredientsChamado2'));

        setIsDrink(recipes);
      } else if (isMealsPage) {
        const recipes = await searchRecipesByIngredient(myQuery);
        setIsMeal(recipes.map((item) => item.meals));
      }
    };
    const fetchByName = async () => {
      if (isDrinksPage) {
        const recipes = await searchDrinksByName(myQuery);
        setIsDrink(recipes);
      } else if (isMealsPage) {
        const recipes = await searchRecipesByName(myQuery);

        setIsMeal(recipes);
      }
    };
    const fetchByFistLetter = async () => {
      if (isDrinksPage) {
        const recipes = await searchDrinksByFirstLetter(myQuery);
        // const recipeId = recipes[0].idDrink;
        setIsDrink(recipes);
      } else if (isMealsPage) {
        const recipes = await searchRecipesByFirstLetter(myQuery);
        setIsMeal(recipes.map((item) => item.meals));
        // const recipeId = recipes[0].idMeal;
      }
    };
    try {
      if (searchType === 'ingredient') {
        fetchByIngredients();
      } else if (searchType === 'name') {
        fetchByName();
      } else if (searchType === FIRST_LETTER) {
        fetchByFistLetter();
      }

      onSearch(myQuery, searchType, setIsMeal, setIsDrink);
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

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
