import { Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login/Login';
import Drinks from './components/Recipes/Drinks/Drinks';
import Meals from './components/Recipes/Meals/Meals';
import Profile from './components/Profile';
import DoneRecipes from './components/Recipes/DoneRecipes';
import FavoriteRecipes from './components/Recipes/FavoriteRecipes';
import RecipeDetail from './components/Recipes/RecipeDetails';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />

      <Route path="/meals/:recipeId" element={ <RecipeDetail /> } />
      <Route path="/drinks/:recipeId" element={ <RecipeDetail /> } />

      {/* <Route
              path="/meals/:id-da-receita/in-progress"
              element={ <MealsInProgress /> }
            />
            <Route
              path="/drinks/:id-da-receita/in-progress"
              element={ <DrinksInProgress /> }
            /> */}

      <Route path="/meals" element={ <Meals /> } />
      <Route path="/drinks" element={ <Drinks /> } />
      <Route path="/profile" element={ <Profile /> } />
      <Route path="/done-recipes" element={ <DoneRecipes /> } />
      <Route path="/favorite-recipes" element={ <FavoriteRecipes /> } />

    </Routes>
  );
}
