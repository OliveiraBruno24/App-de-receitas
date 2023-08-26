import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Profile from '../components/Profile';

describe('Componente Profile', () => {
  it('exibe o email armazenado', () => {
    const emailArmazenado = 'exemplo@exemplo.com';
    localStorage.setItem('user', JSON.stringify({ email: emailArmazenado }));

    render(<Profile />, { wrapper: MemoryRouter });

    const elementoEmail = screen.getByTestId('profile-email');
    expect(elementoEmail).toHaveTextContent(emailArmazenado);
  });

  it(`redireciona para a página de Receitas 
  Feitas ao clicar no botão de Receitas Feitas`, () => {
    render(<Profile />, {
      wrapper: ({ children }) => (
        <MemoryRouter initialEntries={ ['/'] }>{children}</MemoryRouter>
      ),
    });

    const botaoReceitasFeitas = screen.getByTestId('profile-done-btn');
    fireEvent.click(botaoReceitasFeitas);

    // Verifique se o histórico de navegação contém a rota esperada
    expect(window.location.pathname).toBe('/done-recipes');
  });

  it(`redireciona para a página de Receitas 
  Favoritas ao clicar no botão de Receitas Favoritas`, () => {
    render(<Profile />, {
      wrapper: ({ children }) => (
        <MemoryRouter initialEntries={ ['/'] }>{children}</MemoryRouter>
      ),
    });

    const botaoReceitasFavoritas = screen.getByTestId('profile-favorite-btn');
    fireEvent.click(botaoReceitasFavoritas);

    // Verifique se o histórico de navegação contém a rota esperada
    expect(window.location.pathname).toBe('/favorite-recipes');
  });

  it(`limpa o localStorage e redireciona 
  para a página de login ao clicar no botão de Logout`, () => {
    const emailArmazenado = 'exemplo@exemplo.com';
    localStorage.setItem('user', JSON.stringify({ email: emailArmazenado }));

    render(<Profile />, {
      wrapper: ({ children }) => (
        <MemoryRouter initialEntries={ ['/'] }>{children}</MemoryRouter>
      ),
    });

    const botaoLogout = screen.getByTestId('profile-logout-btn');
    fireEvent.click(botaoLogout);

    // Verifique se o localStorage foi limpo e se o redirecionamento ocorreu
    expect(localStorage.getItem('user')).toBe(null);
    expect(window.location.pathname).toBe('/');
  });
});
