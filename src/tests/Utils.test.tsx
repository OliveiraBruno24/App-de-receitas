import {
  searchRecipesByIngredient,
  searchRecipesByName,
  searchRecipesByFirstLetter,
  searchDrinksByIngredient,
  searchDrinksByName,
  searchDrinksByFirstLetter,
} from '../utils/Api';

describe('Testa a API', () => {
  it('deve buscar receitas por ingrediente', async () => {
    const ingrediente = 'chicken';
    const receitas = await searchRecipesByIngredient(ingrediente);
    expect(Array.isArray(receitas)).toBe(true);
  });

  it('deve buscar receitas por nome', async () => {
    const nome = 'burger';
    const receitas = await searchRecipesByName(nome);
    expect(Array.isArray(receitas)).toBe(true);
  });

  it('deve buscar receitas por primeira letra', async () => {
    const primeiraLetra = 'a';
    const receitas = await searchRecipesByFirstLetter(primeiraLetra);
    expect(Array.isArray(receitas)).toBe(true);
  });

  it('deve buscar drinks por ingrediente', async () => {
    const ingrediente = 'vodka';
    const drinks = await searchDrinksByIngredient(ingrediente);
    expect(Array.isArray(drinks)).toBe(true);
  });

  it('deve buscar drinks por nome', async () => {
    const nome = 'mojito';
    const drinks = await searchDrinksByName(nome);
    expect(Array.isArray(drinks)).toBe(true);
  });

  it('deve buscar drinks por primeira letra', async () => {
    const primeiraLetra = 'm';
    const drinks = await searchDrinksByFirstLetter(primeiraLetra);
    expect(Array.isArray(drinks)).toBe(true);
  });
}); // Importe corretamente o arquivo
