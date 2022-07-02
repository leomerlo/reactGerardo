import React from 'react';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="container mx-auto px-4">
      <NavBar />
      <main>
        <ItemDetailContainer id="2" />
      </main>
    </div>
  );
}

export default App;
