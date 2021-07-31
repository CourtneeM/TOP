import React, { Component } from 'react';

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'School Name': '',
      'Title of Study': '',
      Date: ''
    }
  }

  editInformation(value) {
    return (
      <label>
        {value}:
        <input type="text" value={this.state[value]} onChange={e => this.setState({[value]: e.target.value})} />
      </label>
    );
  }

  displayInformation(value) {
    return <p>{this.state[value]}</p>
  }

  render() {
    const fields = Object.keys(this.state);

    return (
      <div>
        <h2>Educational Experience</h2>

        {
          fields.map(field => {
            return (
              <div>
                {this.props.editForm ? this.editInformation(field) : this.displayInformation(field)}
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default Education;
