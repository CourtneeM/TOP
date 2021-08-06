import React, { useEffect, useState } from 'react';
import Score from './components/Score';
import Cards from './components/Cards';
import Win from './components/Win';
import Reset from './components/Reset';

function App() {
  const initialCards = ['a', 'b', 'c', 'd', 'e', 'f'];

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  const [clickedCards, setClickedCards] = useState([]);
  
  const [cards, setCards] = useState(initialCards)

  const incrementScore = () => setScore(score + 1);

  const resetScore = () => setScore(0);

  const randomizeCardOrder = () => {
    const cardsCopy = [...cards];
    const randomizedCards = [];

    while (cardsCopy.length > 0) {
      randomizedCards.push(cardsCopy.splice(Math.floor(Math.random() * cardsCopy.length), 1)[0]);
    }

    setCards(randomizedCards);
  }

  const handleClick = (card) => {
    if (clickedCards.length === cards.length) return;

    if (clickedCards.includes(card)) {
      resetScore();
      setClickedCards([]);
    } else {
      const clickedCardsCopy = [...clickedCards];

      clickedCardsCopy.push(card)

      setClickedCards(clickedCardsCopy);
      incrementScore();
      randomizeCardOrder();
    }
  }

  const resetGameClick = () => {
    setScore(0);
    setHighScore(0);
    setGameWon(false);
    setClickedCards([]);
    setCards(initialCards);
  }

  useEffect(() => {
    if (clickedCards.length === cards.length) setGameWon(true);
  }, [cards, clickedCards]);

  useEffect(() => {
    if (score > highScore) setHighScore(score);
  }, [score, highScore]);

  return (
    <div>
      <header style={styles.header}>
        <h1>Memory Game</h1>
        <Score score={score} highScore={highScore} />
      </header>
      <div>
        <Cards cards={cards} handleClick={handleClick} />
        { gameWon ? <Win /> : null }
        { gameWon ? <Reset resetGameClick={resetGameClick} /> : null }
      </div>
    </div>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '80px',
    borderBottom: '1px solid #000',
  }
}

export default App;
