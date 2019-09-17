import React, { Component } from 'react';

class TechList extends Component {
  state = {
    newTech: '',
    techs: [
      'Node.js',
      'ReactJS',
      'React Native'
    ]
  };

  handleInputChange = event => {
    this.setState({ newTech: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ 
      techs: [... this.state.techs, this.state.newTech],
      newTech: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {this.state.techs.map(tech => <li key={tech}>{tech}</li>)}
        </ul>
        <input 
          type="text" 
          onChange={this.handleInputChange} 
          value={this.state.newTech} 
        />
        <button type="submit">Send</button>
      </form>
    );
  }
}

export default TechList;