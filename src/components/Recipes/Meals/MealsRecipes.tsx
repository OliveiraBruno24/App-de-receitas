import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function RecipeDetail({ type }: any) {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState<any | null>(null);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await fetch(
          type === 'meal'
            ? `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`
            : `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${recipeId}`,
        );
        const data = await response.json();
        // Use ternary operators to set the recipe based on type
        setRecipe(type === 'meal' ? data.meals?.[0] : data.drinks?.[0]);
      } catch (error) {
        console.error('Error fetching recipe details: ', error);
      }
    };

    fetchRecipeDetails();
  }, [recipeId, type]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{type === 'meal' ? recipe.strMeal : recipe.strDrink}</h2>
    </div>
  );
}

export default RecipeDetail;
