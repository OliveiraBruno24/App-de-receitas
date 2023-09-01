import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../RecipeDetails.css';
import DrinksContext from '../../../context/DrinksContext';

function RecipeDetail() {
  const { recipeId } = useParams();
  const { setRecipeContext, recipeContext, setFavContext } = useContext(DrinksContext);

  const [recipe, setRecipe] = useState<any | null>(null);
  const [copied, setCopied] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${recipeId}`,
        );
        const data = await response.json();
        setRecipe(data.drinks?.[0]);
        setRecipeContext([data.drinks?.[0]]);
      } catch (error) {
        console.error('deu zebra aqui: ', error);
      }
    };

    fetchRecipeDetails();
  }, [recipeId]);

  const HandleClick = () => {
    navigate(`/drinks/${recipeId}/in-progress`);
  };

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
      setFavContext(recipeContext);
    } else {
      setFavContext([]);
    }
  }, [favorite, recipeContext, setFavContext]);

  const handleFavoritre = () => {
    setFavorite(!favorite);
  };

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

          <button
            data-testid="start-recipe-btn"
            id="recipeButton"
            onClick={ HandleClick }
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
      ;
    </div>
  );
}

export default RecipeDetail;
