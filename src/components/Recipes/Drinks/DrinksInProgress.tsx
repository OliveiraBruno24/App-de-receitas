import { useContext } from 'react';
import DrinksContext from '../../../context/DrinksContext';

function DrinkInProgress() {
  const { recipeContext } = useContext(DrinksContext);

  return (
    <div>
      {recipeContext ? (
        <div>

          <img
            src={ recipeContext.strDrinkThumb }
            alt={ recipeContext.strDrink }
            data-testid="recipe-photo"
          />

          {/* passar o title para o meio da imagem dps no css, de acordo c figma */}
          <h2 data-testid="recipe-title">
            { recipeContext.strDrink}
          </h2>

          {/* <p data-testid="recipe-category">
            {recipeContext.strAlcoholic}
          </p> */}

          <h3>Ingredients:</h3>

          <div>
            {Object.keys(recipeContext).map((key, index) => {
              if (key.includes('Ingredient') && recipeContext[key]) {
                const measureKey = `strMeasure${key.slice(12)}`;

                return (
                  <div
                    key={ index }
                    data-testid={ `${index}-ingredient-name-and-measure` }
                  >
                    <input
                      type="checkbox"
                    />
                    {recipeContext[key]}
                    {' '}
                    -
                    {' '}
                    {recipeContext[measureKey]}
                  </div>
                );
              }

              return null;
            })}
          </div>

          <h3>Instructions:</h3>
          <p data-testid="instructions">{recipeContext.strInstructions}</p>

          <button
            data-testid="start-recipe-btn"
            id="recipeButton"
            // onClick="aqui vai a função para quando estiver finaizado"
          >
            Continue Recipe
          </button>

        </div>
      ) : (null) }
    </div>
  );
}

export default DrinkInProgress;
