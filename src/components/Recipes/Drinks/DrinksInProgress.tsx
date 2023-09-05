function DrinksInProgress() {
  return (
    <div>
      <img data-testid="recipe-photo" alt="foto" />
      <h1 data-testid="recipe-title">{}</h1>
      <p data-testid="instructions">{}</p>
      <button data-testid="share-btn">Compartilhar</button>
      <button data-testid="favorite-btn">Favoritar</button>
      <p data-testid="recipe-category">{}</p>
      <button data-testid="finish-recipe-btn">Finalizar Receita</button>
    </div>
  );
}

export default DrinksInProgress;
