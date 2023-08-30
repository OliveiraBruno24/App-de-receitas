import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function RecipeDetail() {
  const { type, recipeId } = useParams();
  const [recipe, setRecipe] = useState<any | null>(null);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${recipeId}`,
        );
        const data = await response.json();
        setRecipe(data.drinks?.[0]);
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
            src={ recipe.strDrinkThumb }
            alt={ recipe.strDrink }
            data-testid="recipe-photo"
          />

          {/* passar o title para o meio da imagem dps no css, de acordo c figma */}
          <h2 data-testid="recipe-title">
            { recipe.strDrink}
          </h2>

          <p data-testid="recipe-category">
            {recipe.strAlcoholic}
          </p>

          <h3>Ingredients:</h3>

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

        </div>
      ) : (null) }
      ;
    </div>
  );
}

export default RecipeDetail;
