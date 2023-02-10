import React, { Component } from 'react';
import classes from './app.module.css';
import Index from './input';

class App extends Component {
  render() {
    return (
      <div className={classes.input}>
        <h1 className={classes.heading}>Working with forms in React</h1>
        <hr />
        <Index />
      </div>
    )
  }
}

export default App;