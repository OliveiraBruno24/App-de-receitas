import { useNavigate } from 'react-router-dom';

function Profile() {
  const navigate = useNavigate();
  // Se o e-mail armazenado em localStorage está visível.
  const storedEmail = localStorage.getItem('user');

  const handleDoneRecipesClick = () => {
    navigate('/done-recipes');
    // Ao clicar no botão de `Done Recipes, a rota mude para a tela de receitas feitas.
  };

  const handleFavoriteRecipesClick = () => {
    navigate('/favorite-recipes');
    // Ao clicar no botão de Favorite Recipes, a rota mude para a tela de receitas favoritas.
  };

  const handleLogoutClick = () => {
    // Limpa todas as chaves do localStorage.
    localStorage.clear();
    // Redireciona para a tela de login.
    navigate('/');
  };

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
      <button data-testid="profile-done-btn" onClick={ handleDoneRecipesClick }>
        Done Recipes
      </button>
      <button data-testid="profile-favorite-btn" onClick={ handleFavoriteRecipesClick }>
        Favorite Recipes
      </button>
      <button data-testid="profile-logout-btn" onClick={ handleLogoutClick }>
        Logout
      </button>
    </div>
  );
}

export default Profile;
