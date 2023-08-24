import { useContext } from 'react';
import MealsContext from '../../context/MealsContext';

function Meals() {
  const { meals } = useContext(MealsContext);

  return (
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
  );
}

export default Meals;
