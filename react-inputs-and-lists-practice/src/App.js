import React, { Component } from 'react';
import Overview from './components/Overview';
import uniqid from 'uniqid';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: {
        text: '',
        id: uniqid(),
        edit: false
      },
      tasks: [],
    }

    this.handleEditTask = this.handleEditTask.bind(this);
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
    this.setEditTrue = this.setEditTrue.bind(this);
    this.handleSubmitEditTask = this.handleSubmitEditTask.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
        edit: false,
      }
    });
  }

  addTask() {
    if (this.state.task.text === '') return;

    this.setState((prevState) => ({
      task: {
        text: '',
        id: uniqid(),
        edit: false,
      },
      tasks: [...prevState.tasks, this.state.task],
    }));
  }

  handleEditTask(index) {
    if (this.state.task.text === '') return;

    let tasksCopy = [...this.state.tasks];
    tasksCopy.splice(index, 1, this.state.task);
    
    this.setState({
      task: {
        text: '',
        id: uniqid()
      },
      tasks: tasksCopy,
    });
  }

  handleDeleteTask(index) {
    const tasksCopy = [...this.state.tasks];
    tasksCopy.splice(index, 1);

    this.setState({
      tasks: tasksCopy,
    });
  }

  setEditTrue(index) {
    const tasksCopy = [...this.state.tasks];
    tasksCopy[index].edit = true;

    this.setState({
      tasks: tasksCopy,
    });
  }

  handleSubmitEditTask(editedTaskText, index) {
    let tasksCopy = [...this.state.tasks];
    tasksCopy[index].text = editedTaskText;
    tasksCopy[index].edit = false;

    this.setState({
      tasks: tasksCopy,
    });
  }

  render() {
    return (
      <div className="App">
        <label>
          Task
          <input 
            type="text"
            id="task-input"
            value={this.state.task.text}
            onChange={(e) => this.handleInputChange(e)}
          />
        </label>

        <Overview tasks={this.state.tasks} editTask={this.handleEditTask} deleteTask={this.handleDeleteTask} setEditTrue={this.setEditTrue} handleSubmitEditTask={this.handleSubmitEditTask}/>

        <button onClick={() => this.addTask()}>Submit</button>
      </div>
    );
  }
}

export default App;
