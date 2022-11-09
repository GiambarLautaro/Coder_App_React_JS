import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PieDePagina from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import BarraNav from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BarraNav />
      <ItemListContainer />
      <PieDePagina />
    </div>
  );
}

export default App;
