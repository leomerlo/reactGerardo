import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartContainer from './components/CartContainer/CartContainer';
import NavBar from './components/NavBar/NavBar';
import { CartContextProvider } from './store/CartContext';

function App() {

  return (
    <CartContextProvider>
      <div className="container mx-auto px-4">
        <NavBar />
        <main>
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route exact path="/cart" element={<CartContainer />} />
            <Route path="/categories/:catId" element={<ItemListContainer />} />
            <Route path="/products/:prodId" element={<ItemDetailContainer />} />
          </Routes>
        </main>
      </div>
    </CartContextProvider>
  );
}

export default App;