import React, { useState }  from 'react';
import './Container.css';
import ItemListContainer from './ItemListContainer';

function Container() {
  const [ greeting , setGreeting ] = useState('Hola, Greetings');
  return (
    <>
      <ItemListContainer greeting={greeting} />
      <button onClick={() => setGreeting('Hola, Terricola')}>Click</button>
    </>
  );
}

export default Container;
