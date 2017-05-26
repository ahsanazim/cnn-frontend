import React, { Component } from 'react';
import QueryBox from './query-box.js';
import { status } from '../api/author.js';

export default class Author extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
    };
  }

  authorStatus = (id) => {
    status(id)
      .then((infoStr) => {
        alert(infoStr);
      });
  };

  render() {
    if (!this.state.logged) {
      return (
        <div className="optsContainer">
          <h2 className="headline">Perform an Action or Log In</h2>
          <div className="queryBoxesCont">
            <QueryBox title="register" action={() => { alert('hallo'); }} />
            <QueryBox title="login" action={this.authorStatus} />
          </div>
        </div>
      );
    } else {
      return (
        <div className="optsContainer">
          <h2 className="headline">Logged In! - Perform an Action</h2>
          <div className="queryBoxesCont">
            <QueryBox title="submit" />
            <QueryBox title="status" />
            <QueryBox title="retract" />
          </div>
        </div>
      );
    }
  }
}
