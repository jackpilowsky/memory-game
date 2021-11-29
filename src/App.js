
import React, { useState } from 'react';
import './App.css';
import getCards from './cards'
import Header from './layout/Header'
import Main from './layout/Main'

function App() {
  
  const [cards, setCards] = useState(getCards())

  const restart = () => setCards(getCards())
  const handleClick = (i) =>{
    let clonedCards = [...cards]
    if(clonedCards[i].visible){
      return 
    }
    clonedCards[i].visible = true
    console.log(clonedCards)
    setCards(clonedCards)
  }

  return (
    <div className="App">
      <Header restart={restart} />
      <Main cards={cards} handleClick={handleClick} />
    </div>
  );
}


export default App;
