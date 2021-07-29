import React, { Component } from 'react';

class Overview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editedTaskText: '',
    }
  }

  displayTasks() {
    return this.props.tasks.map((task, index) => {
      if (task.edit) {
        return this.displayEditField(task, index);
      } else {
        return this.displayTask(task, index);
      }
    })
  }

  displayTask(task, index) {
    return <li key={task.id}>
             {index + 1}: {task.text}
             <button onClick={() => this.props.setEditTrue(index)}>Edit</button>
             <button onClick={() => this.props.deleteTask(index)}>Delete</button>
           </li>
  }
  
  displayEditField(task, index) {
    return <li key={task.id}>
             <input type="text" placeholder={task.text} onChange={(e) => this.handleInputChange(e)}/>
             <button onClick={() => this.props.handleSubmitEditTask(this.state.editedTaskText, index)}>Submit</button>
           </li>
  }

  handleInputChange(e) {
    this.setState({
      editedTaskText: e.target.value,
    });
  }

  render() {
    return (
      <ul>
        { this.displayTasks() }
      </ul>
    );
  }
}

export default Overview;
