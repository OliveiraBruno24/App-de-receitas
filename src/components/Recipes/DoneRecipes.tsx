import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FavoriteAndDoneRecipes } from '../../utils/types';
import Header from '../Header/Header';
import shareIcon from '../../images/shareIcon.svg';

function DoneRecipes() {
  const [doneRecipes, setDoneRecipes] = useState<FavoriteAndDoneRecipes[]>([]);
  const [filter, setFilter] = useState<any | null>(null);
  const [copy, setCopy] = useState('');
  console.log(copy);

  useEffect(() => {
    const DoneRecipesLS = localStorage.getItem('doneRecipes');
    if (DoneRecipesLS) {
      const newDoneRecipes: FavoriteAndDoneRecipes[] = JSON.parse(DoneRecipesLS);
      setDoneRecipes(newDoneRecipes);
    }
  }, []);

  return (
    <>
      <div>
        <Header />

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
          // type e id são string da props (FavoriteAndDoneRecipes) q esta em doneRecipe
          const recipeURL = `http://localhost:3000/${recipe.type}s/${recipe.id}`;
          // clipboard é a area de transferência
          navigator.clipboard.writeText(recipeURL);
          setTimeout(() => {
            setCopy('Link copied!');
          }, 3000); // limpa a mensagem dps de 3s.
        };

        return (
          <div key={ index }>
            {/* quando filtro é vazio ou algum tipo (drinks/meals) */}
            {filter === null || filter === recipe.type ? (
              <div>

                {/* Display name */}
                <Link to={ `/${recipe.type}s/${recipe.id}` }>
                  <p data-testid={ `${index}-horizontal-name` }>
                    {recipe.name}
                  </p>
                </Link>

                {/* Display image */}
                <Link to={ `/${recipe.type}s/${recipe.id}` }>
                  <img
                    data-testid={ `${index}-horizontal-image` }
                    alt={ recipe.name }
                    src={ recipe.image }
                  />
                </Link>

                {/* Display category and nationality */}
                <p data-testid={ `${index}-horizontal-top-text` }>
                  {recipe.nationality}
                  {' '}
                  -
                  {' '}
                  {recipe.category}
                </p>

                {/* Display done date */}
                <p data-testid={ `${index}-horizontal-done-date` }>
                  Done on:
                  {' '}
                  {recipe.doneDate}
                </p>

                {/* Display tags */}
                {recipe.tags && Array.isArray(recipe.tags) && recipe.tags
                  .slice(0, 2).map((tag: any, tagIndex: any) => (

                    <p
                      key={ `${index}-${tagIndex}` }
                      data-testid={ `${index}-${tag}-horizontal-tag` }
                    >
                      {tag}
                    </p>
                  ))}

                {/* Share button */}
                <button
                  data-testid={ `${index}-horizontal-share-btn` }
                  onClick={ () => { handleShareClick(); } }
                >
                  <img src={ shareIcon } alt="Share" />
                </button>

              </div>
            ) : null }
            {/* traga os displays ou nada */}
          </div>
        );
      })}
    </>
  );
}

export default DoneRecipes;
