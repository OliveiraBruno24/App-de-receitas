import { useContext } from 'react';
import DrinksContext from '../../context/DrinksContext';

function SearchResults() {
  const { drinks } = useContext(DrinksContext);

  return (
    <div>
      {drinks.slice(0, 12).map((drink, index) => (
        <div data-testid={ `${index}-recipe-card` } key={ drink.idDrink }>
          <h2 data-testid={ `${index}-card-name` }>{drink.strDrink}</h2>
          <img
            data-testid={ `${index}-card-img` }
            src={ drink.strDrinkThumb }
            alt={ drink.strDrink }
          />
        </div>
      ))}
      <h1>aqui vai o returna </h1>
    </div>

  );
}

export default SearchResults;
