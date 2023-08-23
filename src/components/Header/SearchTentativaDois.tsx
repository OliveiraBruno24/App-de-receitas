import { useState } from 'react';

function SearchBar() {
  const [search, setSearch] = useState('');
  const [radio, setRadio] = useState('ingredient');

  const handleSearch = () => {
    if (radio === 'ingredient') {
      // Busca na API pelo ingrediente
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`);
    } else if (radio === 'name') {
      // Busca na API pelo nome
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
    } else if (radio === 'firstLetter') {
      // Busca na API pela primeira letra
      if (search.length > 1) {
        window.alert('Your search must have only 1 (one) character');
        return;
      }
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`);
    }
  };

  return (
    <div className="search-bar">
      <input
        data-testid="search-input"
        type="text"
        placeholder="Search"
        value={ search }
        onChange={ (e) => setSearch(e.target.value) }
      />
      <div>
        <input
          data-testid="ingredient-search-radio"
          type="radio"
          name="search-radio"
          value="ingredient"
          checked={ radio === 'ingredient' }
          onChange={ (e) => setRadio(e.target.value) }
        />
        <label htmlFor="ingredient-search-radio">Ingredient</label>
      </div>
      <div>
        <input
          data-testid="name-search-radio"
          type="radio"
          name="search-radio"
          value="name"
          checked={ radio === 'name' }
          onChange={ (e) => setRadio(e.target.value) }
        />
        <label htmlFor="name-search-radio">Name</label>
      </div>
      <div>
        <input
          data-testid="first-letter-search-radio"
          type="radio"
          name="search-radio"
          value="firstLetter"
          checked={ radio === 'firstLetter' }
          onChange={ (e) => setRadio(e.target.value) }
        />
        <label htmlFor="first-letter-search-radio">First Letter</label>
      </div>
      <button data-testid="search-button" onClick={ handleSearch }>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
