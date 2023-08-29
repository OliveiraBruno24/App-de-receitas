// // Importações de teste e configurações...
// import { render, screen, fireEvent } from '@testing-library/react';
// import { MemoryRouter } from 'react-router-dom';
// import FavoriteRecipes from '../components/Recipes/FavoriteRecipes';
// import { mockDataMeals } from './MockData';

// // usar vi para mock?

// test('redireciona para a tela de detalhes ao clicar na foto e no nome da receita', () => {
//   const fakeFavorites = [mockDataMeals];
//   localStorage.setItem('favoriteRecipes', JSON.stringify(fakeFavorites));

//   render(
//     <MemoryRouter>
//       <FavoriteRecipes />
//     </MemoryRouter>,
//   );

//   fireEvent.click(screen.getByTestId('0-horizontal-image'));
//   expect(screen.getByText('Detalhes da Receita')).toBeInTheDocument();

//   fireEvent.click(screen.getByTestId('0-horizontal-name'));
//   expect(screen.getByText('Detalhes da Receita')).toBeInTheDocument();
// });
