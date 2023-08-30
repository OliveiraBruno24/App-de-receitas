import { Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login/Login';
import Profile from './components/Profile';
import DoneRecipes from './components/Recipes/DoneRecipes';
import FavoriteRecipes from './components/Recipes/FavoriteRecipes';
import MealsDetails from './components/Recipes/Meals/MealsDetails';
import DrinksDetails from './components/Recipes/Drinks/DrinksDetails';
import MealsCategorys from './components/Recipes/Meals/MealsCategorys';
import DrinksCategorys from './components/Recipes/Drinks/DrinksCategorys';

export default function Router() {
  return (
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
  );
}
