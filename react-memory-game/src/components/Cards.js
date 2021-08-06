import React from 'react';

function Cards(props) {
  return (
    <div style={styles.div}>
      {
        props.cards.map((card, i) => {
          return <div key={i} onClick={() => props.handleClick(card)} style={styles.card}>{card}</div>
        })
      }
    </div>
  );
}

const styles = {
  div: {
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    width: '50px',
    height: '50px',
    margin: '5px 10px 60px',
    textAlign: 'center',
    background: 'red',
    border: '2px solid #000',
  }
}

export default Cards;
