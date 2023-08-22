import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './components/Login';
import TesteRequired from './components/TesteRequired';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/meals" element={ <TesteRequired /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
