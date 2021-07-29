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

        <Overview tasks={this.state.tasks} />

        <button onClick={() => this.addTask()}>Submit</button>
      </div>
    );
  }
}

export default App;
