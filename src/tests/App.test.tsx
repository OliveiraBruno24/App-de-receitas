import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { Login } from '../pages/Login';
import '@testing-library/jest-dom/extend-expect';

describe('Testando o componente <App />', () => {
  const EMAIL_INPUT = 'email-input';
  const PASSWORD_INPUT = 'password-input';
  const LOGIN_BUTTON = 'login-submit-btn';

  const newEmail = 'teste@gmail.com';
  const newPassword = 'senha123';

  beforeEach(() => {
    localStorage.clear(); // Limpar localStorage antes de cada teste
  });

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

    fireEvent.change(screen.getByTestId('email-input'), { target: { value: newEmail } });
  });

  it('Simula a entrada de dados de senha', () => {
    render(<Login />);

    const passwordInput = screen.getByTestId(PASSWORD_INPUT);
    fireEvent.change(passwordInput, { target: { value: newPassword } });
  });

  it('deve salvar os dados do usuário no localStorage após o login bem-sucedido', () => {
    render(<Login />);
    const campoEmail = screen.getByTestId(EMAIL_INPUT);
    const campoSenha = screen.getByTestId(PASSWORD_INPUT);
    const botaoLogin = screen.getByTestId(LOGIN_BUTTON);

    userEvent.type(campoEmail, 'email@exemplo.com');
    userEvent.type(campoSenha, 'senhamuitolonga');

    fireEvent.click(botaoLogin);

    const usuarioArmazenado = JSON.parse(localStorage.getItem('user') || '{}');
    expect(usuarioArmazenado).toEqual({ email: 'email@exemplo.com' });
  });
});
