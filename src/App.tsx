import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login/Login';
import Header from './components/Header/Header';
import FavoriteRecipes from './components/FavoriteRecipes';
import DoneRecipes from './components/DoneRecipes';
import Profile from './components/Profile';
import Drinks from './components/Drinks/Drinks';
import DrinksInProgress from './components/Drinks/DrinksInProgress';
import DrinksRecipes from './components/Drinks/DrinksRecipes';
import MealsInProgress from './components/Meals/MealsInProgress';
import MealsRecipes from './components/Meals/MealsRecipes';
import Footer from './components/Footer/Footer';
import Meals from './components/Meals/Meals';
import MealsProvider from './context/MealsProvider';
import DrinksProvider from './context/DrinksProvider';

function App() {
  return (

    <BrowserRouter>

      <Header />
      <MealsProvider>
        <DrinksProvider>
          <Routes>
            <Route path="/" element={ <Login /> } />

            <Route path="/meals/:id-da-receita" element={ <MealsRecipes /> } />
            <Route path="/drinks/:id-da-receita" element={ <DrinksRecipes /> } />

            <Route
              path="/meals/:id-da-receita/in-progress"
              element={ <MealsInProgress /> }
            />
            <Route
              path="/drinks/:id-da-receita/in-progress"
              element={ <DrinksInProgress /> }
            />

            <Route path="/meals" element={ <Meals /> } />
            <Route path="/drinks" element={ <Drinks /> } />
            <Route path="/profile" element={ <Profile /> } />
            <Route path="/done-recipes" element={ <DoneRecipes /> } />
            <Route path="/favorite-recipes" element={ <FavoriteRecipes /> } />

          </Routes>
        </DrinksProvider>
      </MealsProvider>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
