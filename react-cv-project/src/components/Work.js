import React, { useState } from 'react';

function Work(props) {
  const [companyName, setCompanyName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [mainTasks, setMainTasks] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  return (
    <div>
      <h2>Work Experience</h2>
      
      <div key={0} style={styles.div} >
        {
          props.editForm ?
          <label>
            Job Title:
            <input type="text" value={companyName} onChange={e => setCompanyName(e.target.value)} style={styles.input} />
          </label> :
          <p>{companyName}</p>
        }
      </div>
      <div key={1} style={styles.div} >
        {
          props.editForm ?
          <label>
            Job Title:
            <input type="text" value={jobTitle} onChange={e => setJobTitle(e.target.value)} style={styles.input} />
          </label> :
          <p>{jobTitle}</p>
        }
      </div>
      <div key={2} style={styles.div} >
        {
          props.editForm ?
          <label>
            Job Title:
            <input type="text" value={mainTasks} onChange={e => setMainTasks(e.target.value)} style={styles.input} />
          </label> :
          <p>{mainTasks}</p>
        }
      </div>
      <div key={3} style={styles.div} >
        {
          props.editForm ?
          <label>
            Job Title:
            <input type="text" value={startDate} onChange={e => setStartDate(e.target.value)} style={styles.input} />
          </label> :
          <p>{startDate}</p>
        }
      </div>
      <div key={4} style={styles.div} >
        {
          props.editForm ?
          <label>
            Job Title:
            <input type="text" value={endDate} onChange={e => setEndDate(e.target.value)} style={styles.input} />
          </label> :
          <p>{endDate}</p>
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

export default Work;
