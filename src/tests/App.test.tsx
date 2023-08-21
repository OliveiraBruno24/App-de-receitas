import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { Login } from '../pages/Login';

describe('Testando o componente <App />', () => {
  const EMAIL_INPUT = 'email-input';
  const PASSWORD_INPUT = 'password-input';
  const LOGIN_BUTTON = 'login-submit-btn';

  it('A página de login possui os campos de email, senha e um botão', () => {
    render(<App />);
    const emailInput = screen.getByTestId(EMAIL_INPUT);
    const passwordInput = screen.getByTestId(PASSWORD_INPUT);
    const loginButton = screen.getByTestId(LOGIN_BUTTON);
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  it('O botão deve estar desabilitado quando o email for inválido', () => {
    render(<App />);
    const emailInput = screen.getByTestId(EMAIL_INPUT);
    const loginButton = screen.getByTestId(LOGIN_BUTTON);
    expect(loginButton).toBeDisabled();
    userEvent.type(emailInput, 'invalid-email');
    expect(loginButton).toBeDisabled();
  });

  it('Simula a entrada de dados e-mail', () => {
    render(<Login />);

    const emailInput = screen.getByTestId('email-input');
    const newEmail = 'teste@gmail.com';

    fireEvent.change(emailInput, { target: { value: newEmail } });
  });

  it('Simula a entrada de dados de senha', () => {
    render(<Login />);

    const passwordInput = screen.getByTestId(PASSWORD_INPUT);
    const newPassword = 'senha123';

    fireEvent.change(passwordInput, { target: { value: newPassword } });
  });
});
