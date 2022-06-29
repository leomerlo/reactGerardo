import React from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <main className="container mx-auto">
        <ItemListContainer />
      </main>
    </div>
  );
}

export default App;
