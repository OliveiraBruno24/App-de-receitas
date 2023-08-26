import React, { useContext, useState, useEffect } from 'react';
import MealsContext from '../../context/MealsContext';
import { Meal } from '../../utils/types';

function Meals() {
  const { meals } = useContext(MealsContext);
  const [categories, setCategories] = useState<Meal[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          'https://www.themealdb.com/api/json/v1/1/list.php?c=list',
        );
        const data = await response.json();
        setCategories(data.meals.slice(0, 5));
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
        {meals.slice(0, 12).map((meal, index) => (
          <div data-testid={ `${index}-recipe-card` } key={ meal.idMeal }>
            <h2 data-testid={ `${index}-card-name` }>{meal.strMeal}</h2>
            <img
              data-testid={ `${index}-card-img` }
              src={ meal.strMealThumb }
              alt={ meal.strMeal }
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Meals;
