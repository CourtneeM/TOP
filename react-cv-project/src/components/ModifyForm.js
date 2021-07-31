import React from 'react';

function ModifyForm(props) {
  return (
    <div>
      {props.editForm ? <button onClick={() => props.handleClick()}>Submit</button> : <button onClick={() => props.handleClick()}>Edit</button> }
    </div>
  );
}

export default ModifyForm;
