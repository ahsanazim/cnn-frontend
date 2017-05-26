import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Author from './author.js';
import Editor from './editor.js';
import Reviewer from './reviewer.js';

// example class based component (smart component)
class Home extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
      seq: '',
    };
  }

  render() {
    return (
     <Tabs>
        <Tab label="Author" >
          <Author/>
        </Tab>
        <Tab label="Editor" >
          <Editor/>
        </Tab>
        <Tab label="Reviewer" >
          <Reviewer/>
        </Tab>
     </Tabs>
    );
  }
}

export default Home;
