import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter, MemoryRouter, useNavigate } from 'react-router-dom';
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
    render(
      <BrowserRouter>
        <Profile />
      </BrowserRouter>,
    );

    const botaoReceitasFeitas = screen.getByTestId('profile-done-btn');
    fireEvent.click(botaoReceitasFeitas);

    // Verifique se o histórico de navegação contém a rota esperada
    expect(window.location.pathname).toBe('/done-recipes');
  });

  it(`redireciona para a página de Receitas 
  Favoritas ao clicar no botão de Receitas Favoritas`, () => {
    render(
      <BrowserRouter>
        <Profile />
      </BrowserRouter>,
    );

    const botaoReceitasFeitas = screen.getByTestId('profile-favorite-btn');
    fireEvent.click(botaoReceitasFeitas);
    expect(window.location.pathname).toBe('/favorite-recipes');
  });

  it(`redireciona para a página de login
   ao clicar no botão de Logout`, () => {
    render(
      <BrowserRouter>
        <Profile />
      </BrowserRouter>,
    );

    fireEvent.click(screen.getByTestId('profile-logout-btn'));
    expect(window.location.pathname).toBe('/');
  });
});
