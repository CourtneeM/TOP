import React, { Component } from 'react';
import Overview from './components/Overview';
import uniqid from 'uniqid';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: {
        text: '',
        id: uniqid()
      },
      tasks: [],
    }

    this.handleDeleteTask = this.handleDeleteTask.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
      }
    });
  }

  addTask() {
    this.setState((prevState) => ({
      task: {
        text: '',
        id: uniqid()
      },
      tasks: [...prevState.tasks, this.state.task],
    }));
  }

  handleDeleteTask(index) {
    const tasksCopy = [...this.state.tasks];
    tasksCopy.splice(index, 1);

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

        <Overview tasks={this.state.tasks} deleteTask={this.handleDeleteTask}/>

        <button onClick={() => this.addTask()}>Submit</button>
      </div>
    );
  }
}

export default App;
