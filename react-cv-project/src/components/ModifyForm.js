import React from 'react';

function ModifyForm(props) {
  return (
    <div>
      {
        props.editForm ?
        <button onClick={() => props.handleClick()} style={styles.button}>Submit</button> :
        <button onClick={() => props.handleClick()} style={styles.button}>Edit</button>
      }
    </div>
  );
}

const styles = {
  button: {
    marginTop: '20px',
    padding: '7px 30px',
  }
}

export default ModifyForm;
