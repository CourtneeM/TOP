import React from 'react';

function Score(props) {
  return (
    <div style={styles.div}>
      <p style={styles.score}>Score: {props.score}</p>
      <p style={styles.highScore}>High Score: {props.highScore}</p>
    </div>
  );
}

const styles = {
  div: {
    display: 'flex',
  },
  score: {
    marginRight: '10px',
  },
  highScore: {
    marginLeft: '10px',
  }
}

export default Score;
