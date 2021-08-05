import React, { useState } from 'react';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Work from './components/Work';
import ModifyForm from './components/ModifyForm';

function App() {
  // this.handleClick = this.handleClick.bind(this);

  const [editForm, setEditForm] = useState(true);

  const handleClick = () => {
    if (![...document.querySelectorAll('input')].every(input => input.value !== '')) return;
    
    setEditForm(!editForm)
  }

  return (
    <div style={styles.div}>
      <GeneralInfo editForm={editForm} />
      <Education editForm={editForm} />
      <Work editForm={editForm} />
      <ModifyForm editForm={editForm} handleClick={handleClick} />
    </div>
  );
}

const styles = {
  div: {
    fontFamily: 'sans-serif',
    textAlign: 'center'
  }
}

export default App;
