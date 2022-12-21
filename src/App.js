import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PieDePagina from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import BarraNav from './components/Navbar';
import Checkout from './components/Checkout';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import ThankUPage from './components/ThankUPage';
import CartContextComponent from './components/CartContextComponent';

export default function App() {
  return (
    <CartContextComponent>
      <BrowserRouter>
        <div className="App">
          <BarraNav />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/category/:idCategory" element={<ItemListContainer />} />
            <Route path="item/:idItem" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/thankyou" element={<ThankUPage />} />
          </Routes>
          <PieDePagina />
        </div>
      </BrowserRouter>
    </CartContextComponent>
  );
}
