import { screen, fireEvent, render, waitFor } from '@testing-library/react';
import { BrowserRouter, MemoryRouter, Route } from 'react-router-dom';
import Header from '../components/Header/Header';

describe('Componente Header', () => {
  const PAGE_TITLE = 'page-title';
  const PROFILE_TOP_BTN = 'profile-top-btn';
  const SEARCH_TOP_BTN = 'search-top-btn';
  const SEARCH_INPUT = 'search-input';

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

    const profileButton = screen.getByTestId(PROFILE_TOP_BTN);
    fireEvent.click(profileButton);
    const pageTitle = screen.getByTestId(PAGE_TITLE);
    expect(pageTitle).toHaveTextContent('Profile');
  });

  test('Testa título da página para "Drinks"', () => {
    render(
      <MemoryRouter initialEntries={ ['/drinks'] } initialIndex={ 0 }>
        <Header />
      </MemoryRouter>,
    );

    const pageTitle = screen.getByTestId(PAGE_TITLE);
    expect(pageTitle).toHaveTextContent('Drinks');
  });

  test('Testa se o botão de Search está funcionando corretamente', async () => {
    render(
      <MemoryRouter initialEntries={ ['/meals'] } initialIndex={ 0 }>
        <Header />
      </MemoryRouter>,
    );

    const searchButton = screen.getByTestId(SEARCH_TOP_BTN);
    fireEvent.click(searchButton);

    await waitFor(() => {
      const searchBar = screen.getByTestId(SEARCH_INPUT);
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

  test('Testa exibição correta do ícone de busca', () => {
    render(
      <MemoryRouter initialEntries={ ['/meals'] } initialIndex={ 0 }>
        <Header />
      </MemoryRouter>,
    );

    const searchButton = screen.getByTestId(SEARCH_TOP_BTN);
    expect(searchButton).toBeInTheDocument();
  });

  test('Testa redirecionamento para a tela de busca', async () => {
    render(
      <MemoryRouter initialEntries={ ['/meals'] } initialIndex={ 0 }>
        <Header />
      </MemoryRouter>,
    );

    const searchButton = screen.getByTestId(SEARCH_TOP_BTN);
    fireEvent.click(searchButton);

    // Aguarda até que o elemento da barra de pesquisa seja renderizado
    await waitFor(() => {
      const searchBar = screen.getByTestId(SEARCH_INPUT);
      expect(searchBar).toBeInTheDocument();

      // Simula a ação de fechar a barra de pesquisa
      fireEvent.click(searchButton);
      expect(searchBar).not.toBeInTheDocument();
    });
  });

  test('Testa a função toggleSearch', async () => {
    render(
      <MemoryRouter initialEntries={ ['/meals'] } initialIndex={ 0 }>
        <Header />
      </MemoryRouter>,
    );

    const searchButton = screen.getByTestId(SEARCH_TOP_BTN);

    // Verifica que a barra de pesquisa não está visível inicialmente
    expect(screen.queryByTestId(SEARCH_INPUT)).not.toBeInTheDocument();

    // Clica no botão de pesquisa para abrir a barra
    fireEvent.click(searchButton);

    // Aguarda até que a barra de pesquisa seja renderizada
    await waitFor(() => {
      const searchBar = screen.getByTestId(SEARCH_INPUT);
      expect(searchBar).toBeInTheDocument();

      // Verifica que a barra de pesquisa está visível
      expect(screen.queryByTestId(SEARCH_INPUT)).toBeInTheDocument();

      // Clica novamente no botão de pesquisa para fechar a barra
      fireEvent.click(searchButton);

      // Aguarda até que a barra de pesquisa não esteja mais visível
      waitFor(() => {
        expect(screen.queryByTestId(SEARCH_INPUT)).not.toBeInTheDocument();
      });
    });
  });
});
