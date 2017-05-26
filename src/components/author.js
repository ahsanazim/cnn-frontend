import React, { Component } from 'react';

export default class Author extends Component {
  constructor(props){
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <h2 className="headline">Author</h2>
        <p>
          This is an example tab.
        </p>
        <p>
          You can put any sort of HTML or react component in here. It even keeps the component state!
        </p>
      </div>
    );
  }
}
