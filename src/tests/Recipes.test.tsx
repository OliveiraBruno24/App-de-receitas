import React from 'react';
import { render, waitFor } from '@testing-library/react';
import Meals from '../components/Recipes/Meals/Meals';
import Drinks from '../components/Recipes/Drinks/Drinks';
import { mockDataDrinksCategories, mockDataMealsCategories } from './MockData';

describe('Meals', () => {
  test('renderiza os botões de categoria', () => {
    const { getByTestId } = render(<Meals />);
    const categoryButton = getByTestId('Beef-category-filter');
    expect(categoryButton).toBeInTheDocument();
  });

  test('renderiza os cards de categoria', () => {
    const { getByTestId } = render(<Meals />);
    const mealCards = getByTestId('meal-card-name');
    expect(mealCards).toBeInTheDocument();
  });
});

describe('Drinks', () => {
  test('renderiza os botões de categoria', () => {
    const { getByTestId } = render(<Drinks />);
    const categoryButton = getByTestId('Cocktail-category-filter');
    expect(categoryButton).toBeInTheDocument();
  });

  test('renderiza os cards de categoria', () => {
    const { getByTestId } = render(<Drinks />);
    const drinkCards = getByTestId('drink-card-name');
    expect(drinkCards).toBeInTheDocument();
  });
});
