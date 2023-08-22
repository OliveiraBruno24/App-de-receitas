import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './components/Login';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import { RecipeItem } from './utils/types';

function App() {
  const handleSearch = async (
    query: string,
    searchType: string,
    recipes: RecipeItem[],
  ) => {
    console.log('Busca do individuo:', query);
    console.log('tipo de radio:', searchType);
    console.log('receita querida:', recipes);
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/search" element={ <SearchBar onSearch={ handleSearch } /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
