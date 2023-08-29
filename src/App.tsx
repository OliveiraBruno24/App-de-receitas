import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Login } from './pages/Login/Login';

import Header from './components/Header/Header';
import FavoriteRecipes from './components/Recipes/FavoriteRecipes';
import DoneRecipes from './components/Recipes/DoneRecipes';
import Profile from './components/Profile';
import Footer from './components/Footer/Footer';
import MealsCategorys from './components/Recipes/Meals/MealsCategorys';
import DrinksCategorys from './components/Recipes/Drinks/DrinksCategorys';
import MealsProvider from './context/MealsProvider';
import DrinksProvider from './context/DrinksProvider';
import MealsDetails from './components/Recipes/Meals/MealsDetails';
import DrinksDetails from './components/Recipes/Drinks/DrinksDetails';

function App() {
  return (

    <BrowserRouter>

      <Header />
      <MealsProvider>
        <DrinksProvider>
          <Routes>
            <Route path="/" element={ <Login /> } />

            <Route path="/meals/:recipeId" element={ <MealsDetails /> } />
            <Route path="/drinks/:recipeId" element={ <DrinksDetails /> } />

            {/* <Route
              path="/meals/:id-da-receita/in-progress"
              element={ <MealsInProgress /> }
            />
            <Route
              path="/drinks/:id-da-receita/in-progress"
              element={ <DrinksInProgress /> }
            /> */}

            <Route path="/meals" element={ <MealsCategorys /> } />
            <Route path="/drinks" element={ <DrinksCategorys /> } />
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
