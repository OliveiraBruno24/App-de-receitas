function RecipeDetails({ recipeType }: RecipeDetailsProps) {
  return (
    <div>
      <p data-testid="instructions">{}</p>
      <button data-testid="share-btn">Compartilhar</button>
      <button data-testid="favorite-btn">Favoritar</button>
      <button data-testid="finish-recipe-btn">Finalizar Receita</button>
    </div>
  );
}

export default RecipeDetails;
