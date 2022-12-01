import React, {Component} from 'react';

import Event from './app.module.css';

class App extends Component {

  state = {
    name:''
  }

    handleButtonClick = (event) => {
        // console.log(event);
        console.log(event.target);
        // console.log('Button clicked');
    };

    handleChange = (event) => {
        // console.log(event.target.value);
        this.setState({name: event.target.value});
    };

    handleFocus = (event) => {
        console.log('I am Focus Event');
    };

    handleBlur = (event) => {
      if(!this.state.name){
        alert('Please enter your name');
      }
      console.log('I am Blur Event');
    };

  render() {
    return (
      <div className={Event.wrapper}>
        <h1 className={Event.heading}>Our first react event handler.</h1>
        <button className={Event.btn} onClick={this.handleButtonClick}>Click Me</button>
        <br />
        <input className={Event.text_field} onBlur={this.handleBlur} onFocus={this.handleFocus} onChange ={this.handleChange} value = {this.state.name} type="text" placeholder='Enter Some Text'/>
        <br />
        <br />
        {this.state.name && <h3>Welcome, {this.state.name}</h3>
}
      </div>

    );
  }
}

export default App;