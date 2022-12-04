import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PieDePagina from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import BarraNav from './components/Navbar';
import Checkout from './components/Checkout';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import ThankUPage from './components/ThankUPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <BarraNav />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/category/:idcategory" element={<ItemListContainer />} />
          <Route path="item/:iditem" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/thankyou" element={<ThankUPage />} />
        </Routes>
        <PieDePagina />
      </div>
    </BrowserRouter>
  );
}

export default App;
