import React, { Component } from 'react';
import UnControlledForm from './unControlledForm';
import ControlledForm from './controlledForm';

class App extends Component {
  render() {
    return (
      <div>
        {/* <h1>Basic Uncontrolled Forms</h1>
        <UnControlledForm /> */}
        <h1>Basic Controlled Forms</h1>
        <ControlledForm />
      </div>
    )
  }
}

export default App;
