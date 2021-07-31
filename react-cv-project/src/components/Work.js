import React from 'react';

function Work(props) {
  return (
    <div>
      <h2>Work Experience</h2>
      
      <div>
        {props.editForm ? editInformation('Company Name') : displayInformation('Company Name')}
      </div>
      
      <div>
        {props.editForm ? editInformation('Job Title') : displayInformation('Job Title')}
      </div>
      
      <div>
        {props.editForm ? editInformation('Main Tasks') : displayInformation('Main Tasks')}
      </div>
      
      <div>
        {props.editForm ? editInformation('Start Date') : displayInformation('Start Date')}
      </div>
      
      <div>
        {props.editForm ? editInformation('End Date') : displayInformation('End Date')}
      </div>
    </div>
  );
}

function editInformation(value) {
  return (
    <label>
      {value}:
      <input type="text" />
    </label>
  );
}

function displayInformation(value) {
  return <p>{value}</p>
}

export default Work;
