import React, { useState } from 'react';
import { searchRecipesByIngredient, searchRecipesByName,
  searchRecipesByFirstLetter } from '../utils/Api';

interface SearchBarProps {
  onSearch: (query: string, searchType: string) => void;
}

function SearchBar({ onSearch }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [searchType, setSearchType] = useState('ingredient');
  const FIRST_LETTER = 'first-letter';

  const handleSearchTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchType(event.target.value);
  };

  const handleSearch = async () => {
    if (searchType === FIRST_LETTER && query.length !== 1) {
      alert('Your search must have only 1 (one) character');
      return;
    }

    let searchFunction: (query: string) => Promise<any> = searchRecipesByIngredient;

    if (searchType === 'ingredient') {
      searchFunction = searchRecipesByIngredient;
    } else if (searchType === 'name') {
      searchFunction = searchRecipesByName;
    } else if (searchType === FIRST_LETTER) {
      searchFunction = searchRecipesByFirstLetter;
    }

    const recipes = await searchFunction(query);
    onSearch(recipes, searchType);
  };

  return (

    <div>
      <input
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
            onChange={ handleSearchTypeChange }
          />
          Ingredient
        </label>

        <label>
          <input
            data-testid="name-search-radio"
            type="radio"
            value="name"
            checked={ searchType === 'name' }
            onChange={ handleSearchTypeChange }
          />
          Name
        </label>

        <label>
          <input
            data-testid="first-letter-search-radio"
            type="radio"
            value={ FIRST_LETTER }
            checked={ searchType === FIRST_LETTER }
            onChange={ handleSearchTypeChange }
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
