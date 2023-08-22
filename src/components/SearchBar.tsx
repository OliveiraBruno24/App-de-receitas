import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  searchRecipesByIngredient,
  searchRecipesByName,
  searchRecipesByFirstLetter,
  searchDrinksByName,
  searchDrinksByFirstLetter,
  searchDrinksByIngredient,
} from '../utils/Api';
import { RecipeItem, SearchBarProps } from '../utils/types';

/* onSearch é o callback q manda as informações p
componente pai (App), p saber oq foi pesquisado */
function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [searchType, setSearchType] = useState('ingredient');
  const FIRST_LETTER = 'first-letter';

  const [renderSearchBar, setRenderSearchBar] = useState(false);

  const handleSearch = async () => {
    // caso a pesquisa tenha mais de um caractere
    if (searchType === FIRST_LETTER && query.length !== 1) {
      window.alert('Your search must have only 1 (one) character');
      return; // return p não continuar a busca
    }

    // Chamar a função de busca aqui
    let recipes: RecipeItem[] = [];

    const isDrinksPage = location.pathname === '/bebidas';

    if (searchType === 'ingredient') {
      if (isDrinksPage) {
        recipes = await searchDrinksByIngredient(query); // Função para buscar drinks por ingrediente
      } else {
        recipes = await searchRecipesByIngredient(query); // Função para buscar comidas por ingrediente
      }
    } else if (searchType === 'name') {
      if (isDrinksPage) {
        recipes = await searchDrinksByName(query); // Função para buscar drinks por nome
      } else {
        recipes = await searchRecipesByName(query); // Função para buscar comidas por nome
      }
    } else if (searchType === FIRST_LETTER) {
      if (isDrinksPage) {
        recipes = await searchDrinksByFirstLetter(query); // Função para buscar drinks por primeira letra
      } else {
        recipes = await searchRecipesByFirstLetter(query); // Função para buscar comidas por primeira letra
      }
    }

    console.log('Resultados obtidos:', recipes);

    // Chamar a função onSearch com os resultados da busca
    onSearch(query, searchType, recipes);
  };

  // tipo o usenavigate, mas obtem o local atual
  const location = useLocation();

  // Verificar o local atual e definir o estado renderSearchBar
  useEffect(() => {
    if (location.pathname === '/search') {
      setRenderSearchBar(true);
    } else {
      setRenderSearchBar(false);
    }
  }, [location]);
  // dependencia ou seja, sempre q o url mudar, manda o useEffect

  return (
    <div>

      {renderSearchBar && (
      // renderiza o componente apenas quando 'renderSearchBar' for true
        <>
          <input
            data-testid="search-input"
            type="text"
            value={ query }
            onChange={ (e) => setQuery(e.target.value) }
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

          <button data-testid="exec-search-btn" onClick={ handleSearch }>
            Search
          </button>
        </>
      )}
    </div>
  );
}

export default SearchBar;
