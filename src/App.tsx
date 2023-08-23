import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './components/Login';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import { Drink, Meal } from './utils/types';
import Footer from './components/Footer';

function App() {
  const handleSearch = async (
    query: string,
    searchType: string,
    // recipes: RecipeItem[],
    meals: Meal[],
    drinks: Drink[],
  ) => {

  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route
          path="/search"
          element={ <SearchBar onSearch={ handleSearch } /> }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
