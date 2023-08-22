import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  searchRecipesByIngredient,
  searchRecipesByName,
  searchRecipesByFirstLetter,
} from '../utils/Api';
import { Recipe } from '../utils/types';

function SearchBar() {
  const [query, setQuery] = useState('');
  const [searchType, setSearchType] = useState('ingredient');
  const FIRST_LETTER = 'first-letter';

  const [renderSearchBar, setRenderSearchBar] = useState(false);

  const handleSearch = async () => {
    // caso a pesquisa tenha mais de um caractere
    if (searchType === FIRST_LETTER && query.length !== 1) {
      alert('Your search must have only 1 (one) character');
      return; // retorn p não continuar a busca
    }

    // Chamar a função de busca aqui
    let recipes: Recipe = [];

    if (searchType === 'ingredient') {
      recipes = await searchRecipesByIngredient(query);
    } else if (searchType === 'name') {
      recipes = await searchRecipesByName(query);
    } else if (searchType === FIRST_LETTER) {
      recipes = await searchRecipesByFirstLetter(query);
    }

    console.log('Resultados obtidos:', recipes);
  };

  // tipo o usenavigate, mas obtem o local atual
  const location = useLocation();

  /* useEffect para verificar o local atual e
    definir o estado renderSearchBar
    p true or false se tiver em search */
  useEffect(() => {
    if (location.pathname === '/search') {
      console.log('deu boa');
      setRenderSearchBar(true);
    } else {
      console.log('deu ruim');
      setRenderSearchBar(false);
    }
  }, [location.pathname]);
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

          <button
            data-testid="exec-search-btn"
            onClick={ handleSearch }
          >
            Search
          </button>
        </>
      )}
    </div>
  );
}

export default SearchBar;
