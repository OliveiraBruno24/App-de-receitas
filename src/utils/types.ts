export interface SearchBarProps {
  // query é o conteudo da busca do user
  // searchType é o tipo baseado em radio
  onSearch: (query: string, searchType: string) => void;
}

export type Recipe = Meal[];

export interface Meal {
  idMeal: string;
  strMeal: string;
}
