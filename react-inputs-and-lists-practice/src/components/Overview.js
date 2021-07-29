import React, { Component } from 'react';

class Overview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        { this.props.tasks.map(task => {
            return <li key={task.id}>{task.text}</li>
          })
        } 
      </ul>
    );
  }
}

export default Overview;
