import React from 'react';
import { render } from '@testing-library/react';
import Recipes from '../components/Meals/MealsRecipes';

describe('Meals', () => {
  test('renderiza os botões de categoria', () => {
    const { getByTestId } = render(<Recipes />);
    const categoryButton = getByTestId('Beef-category-filter');
    expect(categoryButton).toBeInTheDocument();
  });
});
