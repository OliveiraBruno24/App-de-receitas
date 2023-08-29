
// tipagem
import { useContext } from 'react';
import Footer from '../Footer/Footer';
import { UtilsContext } from '../../context/UtilsContext';
import { SearchBarProps } from '../../utils/types';

/* onSearch é o callback q manda as informações p
componente pai (App), p saber oq foi pesquisado */
function SearchBar({onSearch}: SearchBarProps) {
  const FIRST_LETTER = 'first-letter';
  const { myQuery, setMyQuery, searchType, setSearchType } = useContext(UtilsContext);


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
