import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="container mx-auto px-4">
      <NavBar />
      <main>
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route path="/categories/:catId" element={<ItemListContainer />} />
          <Route path="/products/:prodId" element={<ItemDetailContainer />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
