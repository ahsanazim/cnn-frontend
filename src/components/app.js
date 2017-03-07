import React, { Component } from 'react';

// example class based component (smart component)
class App extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {};
  }

  render() {
    return (
      <div className="AppContainer">
        {this.props.children}
      </div>
    );
  }
}

export default App;
