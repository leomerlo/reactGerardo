import React from 'react';
import './App.css';
import Container from './components/Container';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <main className="container mx-auto">
        <Container />
      </main>
    </div>
  );
}

export default App;
