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
import { AAAAAAAAA, Drink, Meal, SearchBarProps } from '../../utils/types';
import Footer from '../Footer/Footer';

/* onSearch é o callback q manda as informações p
componente pai (App), p saber oq foi pesquisado */
function SearchBar({ onSearch }: SearchBarProps) {
  const [myQuery, setMyQuery] = useState('');
  // console.log('query', myQuery);

  const [searchType, setSearchType] = useState('ingredient');
  // console.log('type', searchType);

  const FIRST_LETTER = 'first-letter';

  const [isFood, setIsfood] = useState<Meal[]>([]);
  const [isDrink, setIsDrink] = useState<AAAAAAAAA[]>([]);
  const navigate = useNavigate();

  const HandleSearch = async () => {
    // caso a pesquisa tenha mais de um caractere
    if (searchType === FIRST_LETTER && myQuery.length !== 1) {
      window.alert('Your search must have only 1 (one) character');
      return; // return p não continuar a busca
    }

    const isDrinksPage = location.pathname === '/drinks';

    if (searchType === 'ingredient') {
      if (isDrinksPage) {
        const recipes = await searchDrinksByIngredient(myQuery); // Função para buscar drinks por ingrediente

        const recipeId = recipes[0].drinks.idDrink;

        if (isDrink.length === 1) {
          navigate(`/${isDrinksPage ? 'drinks' : 'meals'}/${recipeId}`);
          return; // Redirecionado, não precisa continuar a busca
        }

        setIsDrink(recipes);
      } else {
        const recipes = await searchRecipesByIngredient(myQuery); // Função para buscar comidas por ingrediente

        setIsfood(recipes);
      }
    } else if (searchType === 'name') {
      if (isDrinksPage) {
        const recipes = await searchDrinksByName(myQuery); // Função para buscar drinks por nome

        const recipeId = recipes[0].drinks.idDrink;

        if (isDrink.length === 1) {
          navigate(`/${isDrinksPage ? 'drinks' : 'meals'}/${recipeId}`);
          return; // Redirecionado, não precisa continuar a busca
        }
        setIsDrink(recipes);
      } else {
        const recipes = await searchRecipesByName(myQuery); // Função para buscar comidas por nome

        console.log('recipes', recipes);
        setIsfood(recipes);
      }
    } if (searchType === FIRST_LETTER) {
      if (isDrinksPage) {
        const recipes = await searchDrinksByFirstLetter(myQuery);

        const recipeId = recipes[0].drinks.idDrink;

        if (isDrink.length === 1) {
          navigate(`/${isDrinksPage ? 'drinks' : 'meals'}/${recipeId}`);
          return; // Redirecionado, não precisa continuar a busca
        }

        setIsDrink(recipes);
      } else {
        const recipes = await searchRecipesByFirstLetter(myQuery);
        if (isDrink.length === 1) {
          const recipeId = recipes[0].idMeal;
          navigate(`/meals/${recipeId}`);
          return; // Redirecionado, não precisa continuar a busca
        }
        setIsfood(recipes);
      }
    }
    onSearch(myQuery, searchType, isFood, isDrink);
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
