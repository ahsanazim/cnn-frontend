import React, { Component } from 'react';

// example class based component (smart component)
class Home extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
      seq: '',
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({ seq: event.target.value });
  }

  render() {
    return (
      <div id="createBar">
        <input onChange={this.onInputChange} value={this.state.seq} placeholder={"Paste your sequence here"} />
        <button onClick={() => alert('you clicked!')}><span>classify</span></button>
      </div>
    );
  }
}

export default Home;
