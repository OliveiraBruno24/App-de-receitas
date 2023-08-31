import { useContext } from 'react';
import '../RecipeDetails.css';
import MealsContext from '../../../context/MealsContext';

function RecipeDetail() {
  const { mealsContext } = useContext(MealsContext);

  return (
    <div>
      {mealsContext ? ( // if
        <div>

          <img
            src={ mealsContext.strMealThumb }
            alt={ mealsContext.strMeal }
            data-testid="recipe-photo"
          />

          {/* passar o title para o meio da imagem dps no css, de acordo c figma */}
          <h2 data-testid="recipe-title">
            { mealsContext.strMeal}
          </h2>

          <p data-testid="recipe-category">
            { mealsContext.strCategory }
          </p>

          <h3>Ingredientes:</h3>

          <div>
            {Object.keys(mealsContext).map((key, index) => {
              if (key.includes('Ingredient') && mealsContext[key]) {
                const measureKey = `strMeasure${key.slice(12)}`;

                return (
                  <div
                    key={ index }
                    data-testid={ `${index}-ingredient-name-and-measure` }
                  >
                    <input
                      type="checkbox"
                    />
                    {mealsContext[key]}
                    {' '}
                    -
                    {' '}
                    {mealsContext[measureKey]}
                  </div>
                );
              }

              return null;
            })}
          </div>

          <h3>Instructions:</h3>
          <p data-testid="instructions">{mealsContext.strInstructions}</p>

          <div data-testid="video">
            { mealsContext.strYoutube }
          </div>

          <button
            data-testid="start-recipe-btn"
            id="recipeButton"
          >
            Continue Recipe
          </button>

        </div>
      ) : (null) }
    </div>
  );
}

export default RecipeDetail;
