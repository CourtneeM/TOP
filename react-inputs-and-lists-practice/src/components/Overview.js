import React, { Component } from 'react';

class Overview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        { this.props.tasks.map((task, index) => {
            return <li key={task.id}>
              {index + 1}: {task.text}
              <button onClick={() => this.props.deleteTask(index)}>Delete</button>
            </li>
          })
        }
      </ul>
    );
  }
}

export default Overview;
