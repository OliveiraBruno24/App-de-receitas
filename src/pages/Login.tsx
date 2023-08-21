import { useState } from 'react';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmailValue, setIsValidEmailValue] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);

  const handleSubmit = () => {
    localStorage.setItem('user', JSON.stringify({ email }));
  };

  const isValidEmail = (user:string): boolean => {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(user);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setIsValidEmailValue(isValidEmail(newEmail));
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    setIsValidPassword(newPassword.length > 6);
  };

  return (
    <>
      <input
        data-testid="email-input"
        type="email"
        placeholder="email@exemplo.com"
        value={ email }
        onChange={ handleEmailChange }
      />
      <input
        data-testid="password-input"
        type="password"
        placeholder="Digite sua senha"
        value={ password }
        onChange={ handlePasswordChange }
      />
      <button
        data-testid="login-submit-btn"
        disabled={ !isValidEmailValue || !isValidPassword }
        onClick={ handleSubmit }
      >
        Login

      </button>
    </>
  );
}
