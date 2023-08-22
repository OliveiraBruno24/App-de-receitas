import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header() {
  const location = useLocation();
  const showSearchIcon = ['/meals', '/drinks'].includes(location.pathname);

  const getTitle = () => {
    switch (location.pathname) {
      case '/meals':
        return 'Meals';
      case '/drinks':
        return 'Drinks';
      case '/profile':
        return 'Profile';
      case '/done-recipes':
        return 'Done Recipes';
      case '/favorite-recipes':
        return 'Favorite Recipes';
      default:
        return '';
    }
  };

  return (
    <header>
      <div>

        <Link to="/profile">
          <img src={ profileIcon } alt="Profile" data-testid="profile-top-btn" />
        </Link>

        {showSearchIcon && (
          <Link to="/search">
            <img src={ searchIcon } alt="Search" data-testid="search-top-btn" />
          </Link>
        )}
      </div>
      <h1 data-testid="page-title">{getTitle()}</h1>
    </header>
  );
}

export default Header;
