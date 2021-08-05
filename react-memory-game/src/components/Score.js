import React from 'react';

function Score(props) {
  return (
    <div>
      <p>Score: {props.score}</p>
      <p>High Score: {props.highScore}</p>
    </div>
  );
}

export default Score;
