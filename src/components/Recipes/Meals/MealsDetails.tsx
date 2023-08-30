import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function RecipeDetail() {
  const { type, recipeId } = useParams();
  const [recipe, setRecipe] = useState<any | null>(null);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`,
        );
        const data = await response.json();
        setRecipe(data.meals?.[0]);
      } catch (error) {
        console.error('deu zebra aqui: ', error);
      }
    };

    fetchRecipeDetails();
  }, [recipeId, type]);

  return (
    <div>
      {recipe ? ( // if
        <div>

          <img
            src={ recipe.strMealThumb }
            alt={ recipe.strMeal }
            data-testid="recipe-photo"
          />

          {/* passar o title para o meio da imagem dps no css, de acordo c figma */}
          <h2 data-testid="recipe-title">
            { recipe.strMeal}
          </h2>

          <p data-testid="recipe-category">
            { recipe.strCategory }
          </p>

          <h3>Ingredientes:</h3>

          <div>
            {Object.keys(recipe)
              .filter((key) => key.includes('Ingredient')
              && recipe[key]).map((key, index) => (

                <div key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
                  {recipe[key]}
                  {' '}
                  -
                  {' '}
                  {/* pega o proximo item da receita */}
                  {recipe[`strMeasure${index + 1}`]}
                </div>
              ))}
          </div>

          <h3>Instructions:</h3>
          <p data-testid="instructions">{recipe.strInstructions}</p>

          <div data-testid="video">
            { recipe.strYoutube }
          </div>

        </div>
      ) : (null) }
      ;
    </div>
  );
}

export default RecipeDetail;
