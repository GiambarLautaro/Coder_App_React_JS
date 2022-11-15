import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PieDePagina from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import BarraNav from './components/Navbar';
import Checkout from './components/Checkout';
import ItemDetailContainer from './components/ItemDetailContainer';
// import CarouselDeFotos from './components/Carousel';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <BarraNav />
        {/* <CarouselDeFotos /> */}
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/category/:idcategory" element={<ItemListContainer />} />
          <Route path="item/:iditem" element={<ItemDetailContainer />} />
        </Routes>
        <PieDePagina />
      </div>
    </BrowserRouter>
  );
}

export default App;
