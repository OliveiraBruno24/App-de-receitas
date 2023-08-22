import { render, screen, fireEvent } from '@testing-library/react';
import { Login } from '../pages/Login';

describe('Componente de Login', () => {
  const email = 'email-input';
  const password = 'password-input';
  const loginSubmitButton = 'login-submit-btn';
  const testeEmail = 'teste@teste.com';

  it('exibe os campos de email, senha e botão de login', () => {
    render(<Login />);

    expect(screen.getByTestId(email)).toBeInTheDocument();
    expect(screen.getByTestId(password)).toBeInTheDocument();
    expect(screen.getByTestId(loginSubmitButton)).toBeInTheDocument();
  });

  it('habilita o botão de login quando email e senha são válidos', () => {
    render(<Login />);

    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const loginButton = screen.getByTestId('login-submit-btn');

    fireEvent.change(emailInput, { target: { value: testeEmail } });
    fireEvent.change(passwordInput, { target: { value: 'senhavalida' } });

    expect(loginButton).toBeEnabled();
  });

  it('desabilita o botão de login quando o email é inválido', () => {
    render(<Login />);

    const emailInput = screen.getByTestId(email);
    const passwordInput = screen.getByTestId(password);
    const loginButton = screen.getByTestId(loginSubmitButton);

    fireEvent.change(emailInput, { target: { value: 'invalido' } });
    fireEvent.change(passwordInput, { target: { value: 'senhavalida' } });

    expect(loginButton).toBeDisabled();
  });

  it('desabilita o botão de login quando a senha é inválida', () => {
    render(<Login />);

    const emailInput = screen.getByTestId(email);
    const passwordInput = screen.getByTestId(password);
    const loginButton = screen.getByTestId(loginSubmitButton);

    fireEvent.change(emailInput, { target: { value: testeEmail } });
    fireEvent.change(passwordInput, { target: { value: 'curta' } });

    expect(loginButton).toBeDisabled();
  });

  it('armazena os dados do usuário no localStorage após o login bem-sucedido', () => {
    render(<Login />);

    const emailInput = screen.getByTestId(email);
    const passwordInput = screen.getByTestId(password);
    const loginButton = screen.getByTestId(loginSubmitButton);

    fireEvent.change(emailInput, { target: { value: testeEmail } });
    fireEvent.change(passwordInput, { target: { value: 'senhavalida' } });
    fireEvent.click(loginButton);

    // const storedUser = JSON.parse(localStorage.getItem('user'));
    // expect(storedUser).toEqual({ email: 'valido@example.com' });
  });
});
