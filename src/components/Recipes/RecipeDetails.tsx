import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function RecipeDetail() {
  const { type, recipeId } = useParams();
  const [rcp, setRecipe] = useState<any | null>(null);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await fetch(
          type === 'meal'
            ? `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`
            : `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${recipeId}`,
        );
        const data = await response.json();
        setRecipe(type === 'meal' ? data.meals?.[0] : data.drinks?.[0]);
      } catch (error) {
        console.error('deu zebra aqui: ', error);
      }
    };

    fetchRecipeDetails();
  }, [recipeId, type]);

  return (
    <div>
      {rcp ? (
        <div>
          <img
            src={ rcp.strMealThumb || rcp.strDrinkThumb }
            alt={ rcp.strMeal || rcp.strDrink }
            data-testid="recipe-photo"
          />
          <h2 data-testid="recipe-title">
            {type === 'meal' ? rcp.strMeal : rcp.strDrink}
          </h2>
          {type === 'meal' && <p data-testid="recipe-category">{rcp.strCategory}</p>}
          {type === 'drink' && <p data-testid="recipe-alcoholic">{rcp.strAlcoholic}</p>}

          <h3>Ingredients:</h3>
          <ul>
            {Object.keys(rcp)
              .filter((key) => key.includes('Ingredient') && rcp[key])
              .map((key, index) => (
                <li key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
                  {rcp[key]}
                  {' '}
                  -
                  {' '}
                  {rcp[`strMeasure${index + 1}`]}
                </li>
              ))}
          </ul>

          <h3>Instructions:</h3>
          <p data-testid="instructions">{rcp.strInstructions}</p>

          {type === 'meal' && (
            <div data-testid="video">
              {/* Embed YouTube video here */}
            </div>
          )}

        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default RecipeDetail;
