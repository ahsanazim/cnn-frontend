import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const QueryBox = (props) => {
  return (
    <div className="queryBox">
      <RaisedButton className="btn" primary label={props.title}
        onClick={props.action}
      />
      <TextField className="queryText" hintText="enter your query" fullWidth />
    </div>
  );
};

export default QueryBox;
