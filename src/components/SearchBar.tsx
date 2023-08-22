import { useState } from 'react';
import { useLocation } from 'react-router-dom';
// Api
import {
  searchRecipesByIngredient,
  searchRecipesByName,
  searchRecipesByFirstLetter,
  searchDrinksByName,
  searchDrinksByFirstLetter,
  searchDrinksByIngredient,
} from '../utils/Api';
// tipagem
import { Drink, Meal, SearchBarProps } from '../utils/types';

/* onSearch é o callback q manda as informações p
componente pai (App), p saber oq foi pesquisado */
function SearchBar({ onSearch }: SearchBarProps) {
  const [myQuery, setMyQuery] = useState('');
  // console.log('query', myQuery);
  const [searchType, setSearchType] = useState('ingredient');
  const FIRST_LETTER = 'first-letter';

  const [isFood, setIsfood] = useState<Meal[]>([]);
  const [isDrink, setIsDrink] = useState<Drink[]>([]);

  const HandleSearch = async () => {
    // caso a pesquisa tenha mais de um caractere
    if (searchType === FIRST_LETTER && myQuery.length !== 1) {
      window.alert('Your search must have only 1 (one) character');
      return; // return p não continuar a busca
    }

    const isDrinksPage = location.pathname === '/bebidas';

    if (searchType === 'ingredient') {
      if (isDrinksPage) {
        // se for bebida faça:
        const recipes = await searchDrinksByIngredient(myQuery); // Função para buscar drinks por ingrediente
        setIsDrink(recipes);
      } else {
        // se for comida faça:
        const recipes = await searchRecipesByIngredient(myQuery); // Função para buscar comidas por ingrediente
        setIsfood(recipes);
      }
    } else if (searchType === 'name') {
      if (isDrinksPage) {
        const recipes = await searchDrinksByName(myQuery); // Função para buscar drinks por nome
        setIsDrink(recipes);
      } else {
        const recipes = await searchRecipesByName(myQuery); // Função para buscar comidas por nome
        console.log('recipes', recipes);
        setIsfood(recipes);
      }
    } else if (searchType === FIRST_LETTER) {
      if (isDrinksPage) {
        const recipes = await searchDrinksByFirstLetter(myQuery); // Função para buscar drinks por primeira letra
        setIsDrink(recipes);
      } else {
        const recipes = await searchRecipesByFirstLetter(myQuery); // Função para buscar comidas por primeira letra
        setIsfood(recipes);
      }
      HandleSearch();
    }

    // Chamar a função onSearch com os resultados da busca
    onSearch(myQuery, searchType, isFood, isDrink);
  };

  console.log('Resultados obtidos:', isFood, isDrink);
  // tipo o usenavigate, mas obtem o local atual
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

    </div>
  );
}

export default SearchBar;

// por que está retornando um array vazio na primieira busca?
