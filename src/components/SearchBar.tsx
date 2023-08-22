import React, { useState } from 'react';
import { searchRecipesByIngredient, searchRecipesByName,
  searchRecipesByFirstLetter } from '../utils/Api';
import { SearchBarProps } from '../utils/types';

function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [searchType, setSearchType] = useState('ingredient');
  const FIRST_LETTER = 'first-letter';

  // função para alterar o conteudo da barra de pesquisa usando useState
  // substituir pelo onclick depois

  // const handleSearchTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchType(event.target.value);
  // };

  // função para fazer a pesquisa na API e retornar os resultados
  const handleSearch = async () => {
    if (searchType === FIRST_LETTER && query.length !== 1) {
      alert('Sua pesquisa deve conter apenas 1 caractere');
      return;
    }

    let searchFunction: (query: string) => Promise<any>;

    switch (searchType) {
      case 'ingredient':
        searchFunction = searchRecipesByIngredient;
        break;
      case 'name':
        searchFunction = searchRecipesByName;
        break;
      case FIRST_LETTER:
        searchFunction = searchRecipesByFirstLetter;
        break;
      default:
        throw new Error(`Tipo de pesquisa desconhecido: ${searchType}`);
    }

    const recipes = await searchFunction(query);
    onSearch(recipes, searchType);
  };

  return (

    <div>
      <input
        data-testid="search-input"
        type="text"
        // value={ query }
        // onChange={ (e) => setQuery(e.target.value) }
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
            onChange={ () => setSearchType('firstLetter') }
          />
          First Letter
        </label>
      </div>

      <button data-testid="exec-search-btn" onClick={ handleSearch }>
        Search
      </button>

    </div>
  );
}

export default SearchBar;
