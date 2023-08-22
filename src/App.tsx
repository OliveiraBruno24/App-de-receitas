import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './components/Login';
import TesteRequired from './components/TesteRequired';
import Header from './components/Header';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route
          path="/teste-required"
          element={ <TesteRequired /> }
        />
        <Route path="/search" element={ <SearchBar /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
