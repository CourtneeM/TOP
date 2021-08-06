import React from 'react';

function Reset(props) {
  return (
    <div style={styles.div} >
      <button style={styles.button} onClick={props.resetGameClick}>Reset</button>
    </div>
  );
}

const styles = {
  div: {
    textAlign: 'center',
  }
}

export default Reset;
