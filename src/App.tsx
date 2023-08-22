import React from 'react';
import './App.css';
import rockGlass from './images/rockGlass.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Login } from './pages/Login';
import SearchBar from './components/SearchBar';

function App() {
  const handleSearch = (query: string, searchType: string) => {
    // Realize a lógica de busca aqui
    console.log(`pesquisando por "${query}" do tipo "${searchType}"`);
  };

  return (

    <div className="meals">
      <span className="logo">TRYBE</span>
      <Login />
      <SearchBar onSearch={ handleSearch } />
      <object className="rocksGlass" type="image/svg+xml" data={ rockGlass }>
        Glass
      </object>
    </div>
  );
}

export default App;
