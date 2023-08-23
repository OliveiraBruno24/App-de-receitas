import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login/Login';
import Header from './components/Header/Header';
import FavoriteRecipes from './components/FavoriteRecipes';
import DoneRecipes from './components/DoneRecipes';
import Profile from './components/Profile';
import Drinks from './components/Drinks/Drinks';
import SearchBar from './components/Meals/Meals';
import DrinksInProgress from './components/Drinks/DrinksInProgress';
import DrinksRecipes from './components/Drinks/DrinksRecipes';
import MealsInProgress from './components/Meals/MealsInProgress';
import MealsRecipes from './components/Meals/MealsRecipes';
import { Callback } from './utils/Callback';
import Footer from './components/Footer/Footer';
// import SearchBar from './components/Meals/Meals';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={ <Login /> } />
        {/* <Route
          path="/search"
          element={ <SearchBar onSearch={ handleSearch } /> }
        /> */}

        <Route path="/meals/:id-da-receita" element={ <MealsRecipes /> } />
        <Route path="/drinks/:id-da-receita" element={ <DrinksRecipes /> } />

        <Route path="/meals/:id-da-receita/in-progress" element={ <MealsInProgress /> } />
        <Route
          path="/drinks/:id-da-receita/in-progress"
          element={ <DrinksInProgress /> }
        />

        <Route path="/meals" element={ <SearchBar onSearch={ Callback } /> } />
        <Route path="/drinks" element={ <Drinks /> } />
        <Route path="/profile" element={ <Profile /> } />
        <Route path="/done-recipes" element={ <DoneRecipes /> } />
        <Route path="/favorite-recipes" element={ <FavoriteRecipes /> } />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
