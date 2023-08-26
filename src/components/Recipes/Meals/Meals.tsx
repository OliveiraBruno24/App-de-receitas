import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MealsContext from '../../../context/MealsContext';
import { Meal } from '../../../utils/types';

function Meals() {
  const { meals } = useContext(MealsContext);
  const [categories, setCategories] = useState<Meal[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredMeals, setFilteredMeals] = useState<Meal[]>([]);

  // Carrega as categorias no carregamento inicial
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

  // Filtra as receitas com base na categoria selecionada ou exibe todas as receitas
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
  }, [meals, selectedCategory]);

  const handleCategoryClick = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory(null); // Limpa o filtro
    } else {
      setSelectedCategory(category); // Aplica o filtro
    }
  };

  const handleClearFilters = () => {
    setSelectedCategory(null);
  };

  return (
    <div>
      <div>
        {/* Botão para exibir todas as receitas */}
        <button
          onClick={ handleClearFilters }
          data-testid="All-category-filter"
        >
          All
        </button>
        {/* Lista de botões de categorias */}
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
        {/* Lista de receitas filtradas */}
        {filteredMeals.map((meal, index) => (
          <Link to={ `/meals/${meal.idMeal}` } key={ meal.idMeal }>
            <div data-testid={ `${index}-recipe-card` }>
              <h2 data-testid={ `${index}-card-name` }>{meal.strMeal}</h2>
              <img
                data-testid={ `${index}-card-img` }
                src={ meal.strMealThumb } // Certifique-se de que essa propriedade está correta
                alt={ meal.strMeal }
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Meals;
