import { useContext } from 'react';
import MealsContext from '../../../context/MealsContext';

function MealsInProgress() {
  const { mealsContext } = useContext(MealsContext);
  console.log('tremBao: ', mealsContext);

  const getIngredients = (meal: any) => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal && meal[`strIngredient${i}`];
      if (ingredient) {
        ingredients.push(ingredient);
      }
    }
    return ingredients;
  };

  const handleCheckboxChange = (e: any) => {
    const isChecked = e.target.checked;
    if (isChecked === true) {

    }
  };

  return (
    <div>
      <img data-testid="recipe-photo" alt="foto" />
      <h1 data-testid="recipe-title">{}</h1>

      <div className="label-checkbox">
        {getIngredients(mealsContext[0]).map((ingredient, index) => (
          <div key={ index }>
            <label key={ index } data-testid={ `${index}-ingredient-step` }>
              <input
                type="checkbox"
                value={ ingredient }
              />
              {ingredient}
            </label>
          </div>
        ))}
      </div>

      <p data-testid="instructions">{}</p>
      <button data-testid="share-btn">Compartilhar</button>
      <button data-testid="favorite-btn">Favoritar</button>
      <p data-testid="recipe-category">{}</p>
      <button data-testid="finish-recipe-btn">Finalizar Receita</button>
    </div>
  );
}

export default MealsInProgress;
