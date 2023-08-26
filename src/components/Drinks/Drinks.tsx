import React, { useContext, useState, useEffect } from 'react';
import { Drink } from '../../utils/types';
import DrinksContext from '../../context/DrinksContext';

function Drinks() {
  const { drinks } = useContext(DrinksContext);
  const [categories, setCategories] = useState<Drink[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list',
        );
        const data = await response.json();
        setCategories(data.drinks.slice(0, 5));
      } catch (error) {
        console.error('Erro de fetching: ', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div>
      <div>
        {categories.map((categoryName) => (
          <button
            key={ categoryName.strCategory }
            data-testid={ `${categoryName.strCategory}-category-filter` }
          >
            {categoryName.strCategory}
          </button>
        ))}
      </div>
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
      </div>
    </div>
  );
}

export default Drinks;
