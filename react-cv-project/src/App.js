import React, { Component } from 'react';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Work from './components/Work';
import ModifyForm from './components/ModifyForm';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editForm: true,
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      editForm: !this.state.editForm
    });
  }

  render() {
    return (
      <div>
        <GeneralInfo editForm={this.state.editForm} />
        <Education editForm={this.state.editForm} />
        <Work editForm={this.state.editForm} />
        <ModifyForm editForm={this.state.editForm} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
