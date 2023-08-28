import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Header from '../Header/Header';
import { FavoriteAndDoneRecipes } from '../../utils/types';

import shareIcon from '../../images/shareIcon.svg';
import blackHeart from '../../images/blackHeartIcon.svg';

function FavoriteRecipes() {
  const [favorites, setFavorites] = useState<FavoriteAndDoneRecipes[]>([]);
  const [filter, setFilter] = useState<string>('');
  const [copy, setCopy] = useState('');

  const handleFavorite = (recipe: FavoriteAndDoneRecipes) => {
    if (localStorage.getItem('favoriteRecipes')) {
      const newFavorites = favorites
        .filter((e) => e.id !== recipe.id) as FavoriteAndDoneRecipes[];
      localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorites));
      setFavorites(newFavorites);
    }
  };

  const handleLinkCopy = (recipe: FavoriteAndDoneRecipes) => {
    const newLink = `${window.location.origin}/${recipe.type}s/${recipe.id}`;
    navigator.clipboard.writeText(newLink).then(() => {
      setCopy(recipe.id);
    });
  };

  useEffect(() => {
    const getFavorite = () => {
      const favorited = JSON.parse(localStorage
        .getItem('favoriteRecipes') || '[]') as FavoriteAndDoneRecipes[];
      setFavorites(favorited);
    };
    getFavorite();
  }, []);

  return (
    <>

      <div className="HeaderFavoriteButton">
        <Header />

        <button
          data-testid="filter-by-all-btn"
          onClick={ () => setFilter('') }
        >
          All
        </button>
        <button
          data-testid="filter-by-meal-btn"
          onClick={ () => setFilter('meal') }
        >
          Meals
        </button>
        <button
          data-testid="filter-by-drink-btn"
          onClick={ () => setFilter('drink') }
        >
          Drinks
        </button>
      </div>

      {favorites.filter((recipe) => (
        filter === 'meal' && recipe.type === 'meal')
        || (filter === 'drink' && recipe.type === 'drink') || filter === '')
        .map((recipe, index) => (
          <div key={ index }>

            <Link to={ `/${recipe.type}s/${recipe.id}` }>
              <div data-testid={ `${index}-horizontal-name` }>{recipe.name}</div>
            </Link>

            <Link to={ `/${recipe.type}s/${recipe.id}` }>
              <img
                data-testid={ `${index}-horizontal-image` }
                alt={ recipe.name }
                src={ recipe.image }
              />
            </Link>

            <div data-testid={ `${index}-horizontal-top-text` }>
              {recipe.type === 'meal'
                ? `${recipe.nationality} - ${recipe.category}`
                : `${recipe.alcoholicOrNot}`}
            </div>

            <div>
              { copy === recipe.id ? <p>Link copied!</p> : null }

              <button onClick={ () => handleLinkCopy(recipe) }>
                <img
                  data-testid={ `${index}-horizontal-share-btn` }
                  src={ shareIcon }
                  alt="shareIcon"
                />
              </button>

              <button onClick={ () => handleFavorite(recipe) }>
                <img
                  data-testid={ `${index}-horizontal-favorite-btn` }
                  src={ blackHeart }
                  alt="blackHeart"
                />
              </button>

            </div>

          </div>

        ))}
    </>
  );
}

export default FavoriteRecipes;
