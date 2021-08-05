import React, { useState } from 'react';

function GeneralInfo(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <div>
      <h2>General Information</h2>
      <div key={0} style={styles.div}>
        {
          props.editForm ?
          <label>
            Name:
            <input type="text" value={name} onChange={e => setName(e.target.value)} style={styles.input}/>
          </label> :
          <p>{name}</p>
        }  
      </div>
      <div key={1} style={styles.div}>
        {
          props.editForm ?
          <label>
            Email:
            <input type="text" value={email} onChange={e => setEmail(e.target.value)} style={styles.input}/>
          </label> :
          <p>{email}</p>
        }  
      </div>
      <div key={2} style={styles.div}>
        {
          props.editForm ?
          <label>
            Phone:
            <input type="text" value={phone} onChange={e => setPhone(e.target.value)} style={styles.input}/>
          </label> :
          <p>{phone}</p>
        }  
      </div>
    </div>
  );
}

const styles = {
  div: {
    display: 'flex',
    justifyContent: 'center',
  },
  input: {
    display: 'block',
  }
}

export default GeneralInfo;
