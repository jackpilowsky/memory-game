
import React, { useState } from 'react';
import './App.css';
import getCards from './cards'
import Header from './layout/Header'
import Main from './layout/Main'

function App() {
  const [cards, setCards] = useState(getCards())
  const [selectedCard, setSelectedCard] = useState(null)
  const [disabled, setDisabled] = useState(false)

  const restart = () => {
    setCards(getCards())
    setDisabled(false)
    setSelectedCard(false)
  }
  const handleClick = (i) =>{
    let clonedCards = [...cards]
    if(disabled || clonedCards[i].faceUp){
      // user clicked a card that is already faceUp
      return 
    }
    clonedCards[i].faceUp = true
    if(selectedCard){
      if(selectedCard.id === clonedCards[i].id){
        // user selected correctly
        setDisabled(true)
        setTimeout(()=>{
          // show both cards for 1 second and then make them disappear
          clonedCards[i].isMatched = true
          selectedCard.isMatched = true
          setSelectedCard(null)
          setCards(clonedCards)
          setDisabled(false)
        }, 1000)
      }else{
        // user selects incorrectly
        setDisabled(true)
        setTimeout(()=>{
          // hide the cards after 3 seconds
          clonedCards[i].faceUp = false
          selectedCard.faceUp = false
          setSelectedCard(null)
          setCards(clonedCards)
          setDisabled(false)
        }, 3000)
      }
    }else{ 
      // there is no selected card, so the clicked card becomes the selected card
      setSelectedCard(clonedCards[i])
    }
    setCards(clonedCards)
  }

  return (
    <div className="App">
      <Header restart={restart} />
      <Main disabled={disabled} cards={cards} handleClick={handleClick} />
    </div>
  );
}


export default App;
