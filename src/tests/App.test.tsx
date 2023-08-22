import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Login } from '../components/Login';

describe('Componente de Login', () => {
  const email = 'email-input';
  const password = 'password-input';
  const loginSubmitButton = 'login-submit-btn';
  const testeEmail = 'teste@teste.com';

  it('exibe os campos de email, senha e botão de login', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>,
    );

    expect(screen.getByTestId(email)).toBeInTheDocument();
    expect(screen.getByTestId(password)).toBeInTheDocument();
    expect(screen.getByTestId(loginSubmitButton)).toBeInTheDocument();
  });

  it('habilita o botão de login quando email e senha são válidos', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>,
    );

    const emailInput = screen.getByTestId(email);
    const passwordInput = screen.getByTestId(password);
    const loginButton = screen.getByTestId(loginSubmitButton);

    fireEvent.change(emailInput, { target: { value: testeEmail } });
    fireEvent.change(passwordInput, { target: { value: 'senhavalida' } });

    expect(loginButton).toBeEnabled();
  });

  it('desabilita o botão de login quando o email é inválido', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>,
    );

    const emailInput = screen.getByTestId(email);
    const passwordInput = screen.getByTestId(password);
    const loginButton = screen.getByTestId(loginSubmitButton);

    fireEvent.change(emailInput, { target: { value: 'invalido' } });
    fireEvent.change(passwordInput, { target: { value: 'senhavalida' } });

    expect(loginButton).toBeDisabled();
  });

  it('desabilita o botão de login quando a senha é inválida', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>,
    );

    const emailInput = screen.getByTestId(email);
    const passwordInput = screen.getByTestId(password);
    const loginButton = screen.getByTestId(loginSubmitButton);

    fireEvent.change(emailInput, { target: { value: testeEmail } });
    fireEvent.change(passwordInput, { target: { value: 'curta' } });

    expect(loginButton).toBeDisabled();
  });

  it('armazena os dados do usuário no localStorage após o login bem-sucedido', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>,
    );

    const emailInput = screen.getByTestId(email);
    const passwordInput = screen.getByTestId(password);
    const loginButton = screen.getByTestId(loginSubmitButton);

    fireEvent.change(emailInput, { target: { value: testeEmail } });
    fireEvent.change(passwordInput, { target: { value: 'senhavalida' } });
    fireEvent.click(loginButton);

    // Coloque o código de expectativa aqui
  });
});
