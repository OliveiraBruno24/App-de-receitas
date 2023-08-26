import React, { useContext, useState, useEffect } from 'react';
import MealsContext from '../../../context/MealsContext';
import { Meal } from '../../../utils/types';

function Meals() {
  const { meals } = useContext(MealsContext);
  const [categories, setCategories] = useState<Meal[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredMeals, setFilteredMeals] = useState<Meal[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          'https://www.themealdb.com/api/json/v1/1/list.php?c=list',
        );
        const data = await response.json();
        setCategories(data.meals.slice(0, 5));
      } catch (error) {
        console.error('Erro de fetching: ', error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchFilteredMeals = async () => {
      if (selectedCategory) {
        try {
          const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`,
          );
          const data = await response.json();
          setFilteredMeals(data.meals.slice(0, 12));
        } catch (error) {
          console.error('Erro de fetching: ', error);
        }
      } else {
        setFilteredMeals(meals.slice(0, 12));
      }
    };

    fetchFilteredMeals();
  }, [selectedCategory, meals]);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const handleClearFilters = () => {
    setSelectedCategory(null);
  };

  return (
    <div>
      <div>
        <button
          onClick={ handleClearFilters }
          data-testid="All-category-filter"
        >
          All
        </button>
        {categories.map((categoryName) => (
          <button
            key={ categoryName.strCategory }
            data-testid={ `${categoryName.strCategory}-category-filter` }
            onClick={ () => handleCategoryClick(categoryName.strCategory) }
          >
            {categoryName.strCategory}
          </button>
        ))}
      </div>
      <div>
        {filteredMeals.map((meal, index) => (
          <div data-testid={ `${index}-recipe-card` } key={ meal.idMeal }>
            <h2 data-testid={ `${index}-card-name` }>{meal.strMeal}</h2>
            <img
              data-testid={ `${index}-card-img` }
              src={ meal.strMealThumb }
              alt={ meal.strMeal }
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Meals;
