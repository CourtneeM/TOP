import React, { Component } from 'react';

class Work extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'Company Name': '',
      'Job Title': '',
      'Main Tasks': '',
      'Start Date': '',
      'End Date': ''
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
        <h2>Work Experience</h2>

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

export default Work;
