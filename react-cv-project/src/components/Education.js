import React from 'react';

function Education(props) {
  return (
    <div>
      <h2>Educational Experience</h2>
      
      <div>
        {props.editForm ? editInformation('School Name') : displayInformation('School Name')}
      </div>
      
      <div>
        {props.editForm ? editInformation('Title of Study') : displayInformation('Title of Study')}
      </div>
      
      <div>
        {props.editForm ? editInformation('Date') : displayInformation('Date') }
      </div>
    </div>
  );
}

function editInformation(value) {
  return (
    <label>
      {value}
      <input type="text" />
    </label>
  );
}

function displayInformation(value) {
  return <p>{value}</p>
}

export default Education;
