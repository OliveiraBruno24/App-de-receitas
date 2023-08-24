import { screen, fireEvent, render, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../components/Header/Header';

describe('Componente Header', () => {
  const PAGE_TITLE = 'page-title';

  test('Testa título da página', () => {
    render(
      <MemoryRouter initialEntries={ ['/meals'] } initialIndex={ 0 }>
        <Header />
      </MemoryRouter>,
    );

    const pageTitle = screen.getByTestId(PAGE_TITLE);
    expect(pageTitle).toHaveTextContent('Meals');
  });

  test('Testa redirecionamento para a tela de perfil', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );

    const profileButton = screen.getByTestId('profile-top-btn');
    fireEvent.click(profileButton);
    const pageTitle = screen.getByTestId(PAGE_TITLE);
    expect(pageTitle).toHaveTextContent('Profile');
  });

  // test('Testa redirecionamento para a tela de busca', async () => {
  //   render(
  //     <MemoryRouter>
  //       <Header />
  //     </MemoryRouter>,
  //   );

  //   const searchButton = screen.getByTestId('search-top-btn');
  //   fireEvent.click(searchButton);

  //   await waitFor(() => {
  //     const pageTitle = screen.getByTestId(PAGE_TITLE);
  //     expect(pageTitle).toHaveTextContent('Search');
  //   });
  // });

  test('Testa título da página para "Drinks"', () => {
    render(
      <MemoryRouter initialEntries={ ['/drinks'] } initialIndex={ 0 }>
        <Header />
      </MemoryRouter>,
    );

    const pageTitle = screen.getByTestId('page-title');
    expect(pageTitle).toHaveTextContent('Drinks');
  });

  test('Testa se o botão de Search está funcionando corretamente', async () => {
    render(
      <MemoryRouter initialEntries={ ['/meals'] } initialIndex={ 0 }>
        <Header />
      </MemoryRouter>,
    );

    const searchButton = screen.getByTestId('search-top-btn');
    fireEvent.click(searchButton);

    await waitFor(() => {
      const searchBar = screen.getByTestId('search-input');
      expect(searchBar).toBeInTheDocument();

      fireEvent.click(searchButton);
      expect(searchBar).not.toBeInTheDocument();
    });
  });

  test('Testa título da página para "Done Recipes"', () => {
    render(
      <MemoryRouter initialEntries={ ['/done-recipes'] } initialIndex={ 0 }>
        <Header />
      </MemoryRouter>,
    );

    const pageTitle = screen.getByTestId(PAGE_TITLE);
    expect(pageTitle).toHaveTextContent('Done Recipes');
  });

  test('Testa título da página para "Favorite Recipes"', () => {
    render(
      <MemoryRouter initialEntries={ ['/favorite-recipes'] } initialIndex={ 0 }>
        <Header />
      </MemoryRouter>,
    );

    const pageTitle = screen.getByTestId(PAGE_TITLE);
    expect(pageTitle).toHaveTextContent('Favorite Recipes');
  });
});
