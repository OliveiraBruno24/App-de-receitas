import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../RecipeDetails.css';
import MealsContext from '../../../context/MealsContext';

function RecipeDetail() {
  const { recipeId } = useParams();
  const { setMealsContext, mealsContext, setFavContext } = useContext(MealsContext);

  const [recipe, setRecipe] = useState<any | null>(null);
  const [copied, setCopied] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const navigate = useNavigate();
  // const [recommendation, setRecommendation] = useState<any | null>(null);,

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`,
        );
        const data = await response.json();
        setRecipe(data.meals?.[0]);
        setMealsContext([data.meals?.[0]]);
      } catch (error) {
        console.error('deu zebra aqui: ', error);
      }
    };

    fetchRecipeDetails();
  }, [recipeId]);

  const HandleClick = () => {
    navigate(`/meals/${recipeId}/in-progress`);
  };

  // Implemente a solução de forma que, ao clicar no botão de compartilhar, o link de detalhes da receita seja copiado para o clipboard e uma mensagem avisando que ele foi copiado apareça na tela em uma tag HTML. Não pode ser window.alert.

  const handleShare = () => {
    const { location: { pathname } } = window;
    const link = `http://localhost:3000${pathname}`;
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  useEffect(() => {
    if (favorite === true) {
      setFavContext(mealsContext);
    } else {
      setFavContext([]);
    }
  }, [favorite, mealsContext, setFavContext]);

  const handleFavoritre = () => {
    setFavorite(!favorite);
  };

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
              .filter((key) => key.includes('Ingredient') && recipe[key])
              .map((key, index) => (
                <div
                  key={ index }
                  data-testid={ `${index}-ingredient-name-and-measure` }
                >
                  {recipe[key]}
                  {' '}
                  -
                  {' '}
                  {/* proximo item */}
                  {recipe[`strMeasure${index + 1}`]}
                </div>
              ))}
          </div>

          <h3>Instructions:</h3>
          <p data-testid="instructions">{recipe.strInstructions}</p>

          <div data-testid="video">
            { recipe.strYoutube }
          </div>

          <button
            data-testid="start-recipe-btn"
            id="recipeButton"
            onClick={ HandleClick }
            className="continueButton"
          >
            Continue Recipe
          </button>
          {copied
            && <p>Link copied!</p>}
          <button
            data-testid="share-btn"
            onClick={ handleShare }
          >
            Share
          </button>
          <button
            data-testid="favorite-btn"
            onClick={ handleFavoritre }
          >
            {favorite ? 'unfavorite' : 'favorite' }
          </button>
        </div>
      ) : (null) }

    </div>
  );
}

export default RecipeDetail;
