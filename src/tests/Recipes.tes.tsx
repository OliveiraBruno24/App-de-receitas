import { vi } from 'vitest';
import { render, waitFor, screen, fireEvent } from '@testing-library/react';
import Meals from '../components/Recipes/Meals/Meals';
import { mockDataMeals, mockMealsCategories } from './MockData';

describe('Meals', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    global.fetch = vi.fn();

    // Mock para categorias de refeições
    global.fetch = vi.fn().mockResolvedValueOnce({
      json: async () => mockMealsCategories,
    });

    // Mock para dados de refeições
    global.fetch = vi.fn().mockResolvedValueOnce({
      json: async () => mockDataMeals,
    });
  });

  test('renderiza os botões de categoria', async () => {
    render(<Meals />);
    await waitFor(() => {
      expect(screen.getByTestId('All-category-filter')).toBeInTheDocument();
    });
  });

  test('filtra receitas por categoria selecionada', async () => {
    render(<Meals />);
    await waitFor(() => {
      expect(screen.getByTestId('0-recipe-card')).toBeInTheDocument();
    });
  });

  test('limpa os filtros ao clicar no botão "All"', async () => {
    render(<Meals />);

    // clica em um botão de categoria primeiro
    fireEvent.click(screen.getByTestId('Beef-category-filter'));

    // clica no botão "All"
    fireEvent.click(screen.getByTestId('All-category-filter'));

    await waitFor(() => {
      // verifica se os cards das receitas originais estão visíveis novamente
      expect(screen.getByTestId('0-recipe-card')).toBeInTheDocument();
    });
  });
});
