import React from 'react';

function GeneralInfo(props) {
  return (
    <div>
      <h2>General Information</h2>
      
      <div>
        {props.editForm ? editInformation('Name') : displayInformation('Name')}  
      </div>
      
      <div>
        {props.editForm ? editInformation('Email') : displayInformation('Email')}   
      </div>
      
      <div>
        {props.editForm ? editInformation('Phone') : displayInformation('Phone')}
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

export default GeneralInfo;
