import { render, screen } from '@testing-library/react';
import Profile from '../components/Profile';

describe('Profile component', () => {
  it('displays the stored email', () => {
    const storedEmail = 'example@example.com';
    localStorage.setItem('user', JSON.stringify({ email: storedEmail }));

    render(<Profile />);

    const emailElement = screen.getByTestId('profile-email');
    expect(emailElement).toHaveTextContent(storedEmail);
  });
});
