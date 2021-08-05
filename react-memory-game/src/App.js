import React, { useState } from 'react';
import Score from './components/Score';
import Cards from './components/Cards';

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const incrementScore = () => setScore(score + 1);

  const resetScore = () => {
    if (score > highScore) {
      setHighScore(score);
    }

    setScore(0);
  }

  const handleClick = () => {
    
  }

  return (
    <div>
      <header>
        <h1>Memory Game</h1>
        <Score score={score} highScore={highScore} />
        <Cards handleClick={handleClick} />
      </header>
    </div>
  );
}

export default App;
