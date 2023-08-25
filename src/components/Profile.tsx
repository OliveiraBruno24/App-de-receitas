import React from 'react';

function Profile() {
  const storedEmail = localStorage.getItem('user');

  return (
    <div>
      <h2>Profile</h2>
      <div>
        <p>
          Email:
          {' '}
          <span data-testid="profile-email">{storedEmail}</span>
        </p>
      </div>
      <button data-testid="profile-done-btn">Done Recipes</button>
      <button data-testid="profile-favorite-btn">Favorite Recipes</button>
      <button data-testid="profile-logout-btn">Logout</button>
    </div>
  );
}

export default Profile;
