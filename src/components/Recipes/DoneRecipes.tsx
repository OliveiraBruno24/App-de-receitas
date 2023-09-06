import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FavoriteAndDoneRecipes } from '../../tests/utils/types';
import shareIcon from '../../images/shareIcon.svg';

function DoneRecipes() {
  const [doneRecipes, setDoneRecipes] = useState<FavoriteAndDoneRecipes[]>([]);
  const [filter, setFilter] = useState<any | null>(null);
  const [copy, setCopy] = useState(false);
  console.log(copy);

  useEffect(() => {
    const DoneRecipesLS = localStorage.getItem('doneRecipes');
    if (DoneRecipesLS) {
      const newDoneRecipes: FavoriteAndDoneRecipes[] = JSON.parse(DoneRecipesLS);
      setDoneRecipes(newDoneRecipes);
    }
  }, []);

  console.log('done', doneRecipes);

  const [url, setUrl] = useState('meals');
  return (
    <>
      <div>

        <button
          data-testid="filter-by-all-btn"
          id="AllButtonRecipe"
          onClick={ () => setFilter(null) } // limpa filtro
        >
          All
        </button>

        <button
          data-testid="filter-by-meal-btn"
          id="MealButtonRecipe"
          onClick={ () => setFilter('meal') }
        >
          Meals
        </button>

        <button
          data-testid="filter-by-drink-btn"
          id="DrinksButtonRecipe"
          onClick={ () => setFilter('drink') }
        >
          Drinks
        </button>
      </div>

      {doneRecipes.map((recipe, index) => {
        const handleShareClick = () => {
          const pathName = window.location.pathname;
          const urlType = pathName.includes('/meals') ? 'meals' : 'drinks';
          setUrl(urlType);
          const recipeURL = `http://localhost:3000/${url}/${recipe.id}`;
          navigator.clipboard.writeText(recipeURL);
          setCopy(true);
          setTimeout(() => {
            setCopy(false);
          }, 1000);
        };
        console.log('Recipe:', recipe);

        return (
          <div key={ index }>
            {filter === null || filter === url ? (
              <div>
                <Link to={ `/${recipe.type}s/${recipe.id}` }>
                  <p data-testid={ `${index}-horizontal-name` }>{recipe.name}</p>
                </Link>

                <Link to={ `/${recipe.type}s/${recipe.id}` }>
                  <img
                    data-testid={ `${index}-horizontal-image` }
                    alt={ recipe.name }
                    src={ recipe.image }
                  />
                </Link>
                <p data-testid={ `${index}-horizontal-top-text` }>
                  {`${recipe.nationality} - ${recipe.category}`}
                </p>
                <div>
                  <p data-testid={ `${index}-horizontal-done-date` }>
                    Done on:
                    {' '}
                    { recipe.doneDate }
                  </p>
                  <p data-testid={ `${index}-horizontal-top-text` }>
                    {recipe.alcoholicOrNot}
                  </p>
                </div>
                {' '}

                {/* Renderizar as tags com data-testid */}
                {recipe.tags && Array.isArray(recipe.tags) && recipe.tags
                  .slice(0, 2).map((tag: any, tagIndex: any) => (
                    <p
                      key={ `${index}-${tagIndex}` }
                      data-testid={ `${index}-${tag}-horizontal-tag` }
                    >
                      {tag}
                    </p>
                  ))}

                <button onClick={ () => handleShareClick() }>

                  <img
                    src={ shareIcon }
                    alt="Share"
                    data-testid={ `${index}-horizontal-share-btn` }

                  />

                </button>
                {copy && <p>Link copied!</p>}
              </div>
            ) : null}
          </div>
        );
      })}
    </>
  );
}

export default DoneRecipes;
