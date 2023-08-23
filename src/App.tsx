import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './components/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import Meals from './pages/Meals';
import MealsProvider from './context/MealsProvider';

function App() {
  // const handleSearch = async (
  //   query: string,
  //   searchType: string,
  //   // recipes: RecipeItem[],
  //   meals: Meal[],
  //   drinks: Drink[],
  // ) => {

  // };

  return (
    <BrowserRouter>
      <Header />
      <MealsProvider>
        <Routes>
          <Route path="/" element={ <Login /> } />
          {/* <Route
          path="/search"
          element={ <SearchBar onSearch={ handleSearch } /> }
        /> */}
          <Route path="/meals" element={ <Meals /> } />
        </Routes>
      </MealsProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
