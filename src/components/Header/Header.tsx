import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import profileIcon from '../../images/profileIcon.svg';
import searchIcon from '../../images/searchIcon.svg';
import SearchBar from './SearchBar';

function Header() {
  const location = useLocation();
  const showSearchIcon = ['/meals', '/drinks'].includes(location.pathname);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

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
          <button onClick={ toggleSearch }>
            <img
              data-testid="search-top-btn"
              src={ searchIcon }
              alt="Search Icon"
            />
          </button>
        )}

        {isSearchVisible && (
          <SearchBar onSearch={ () => {} } setSearchBarInput={ () => {} } />
        )}
      </div>
      <h1 data-testid="page-title">{getTitle()}</h1>
    </header>
  );
}

export default Header;
