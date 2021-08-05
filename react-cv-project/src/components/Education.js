import React, { useState } from 'react';

function Education(props) {
  const [schoolName, setSchoolName] = useState('');
  const [titleOfStudy, setTitleOfStudy] = useState('');
  const [date, setDate] = useState('');

  return (
    <div>
      <h2>Educational Experience</h2>

      <div key={0} style={styles.div}>
        {
          props.editForm ?
          <label>
            School Name:
            <input type="text" value={schoolName} onChange={e => setSchoolName(e.target.value)} style={styles.input} />
          </label> :
          <p>{schoolName}</p>
        }
      </div>
      <div key={1} style={styles.div}>
        {
          props.editForm ?
          <label>
            Title of Study:
            <input type="text" value={titleOfStudy} onChange={e => setTitleOfStudy(e.target.value)} style={styles.input} />
          </label> :
          <p>{titleOfStudy}</p>
        }
      </div>
      <div key={2} style={styles.div}>
        {
          props.editForm ?
          <label>
            Date:
            <input type="text" value={date} onChange={e => setDate(e.target.value)} style={styles.input} />
          </label> :
          <p>{date}</p>
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

export default Education;
