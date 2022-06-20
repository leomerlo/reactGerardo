import React from 'react';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <ItemListContainer greeting="Saludos, terricolas" />
      </main>
    </div>
  );
}

export default App;
