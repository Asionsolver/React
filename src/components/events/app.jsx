import React, { Component } from 'react'
import classes from './app.module.css'

 class App extends Component {
    state = {
        name: ''
    }

    handleButtonClick = (event) => {
        // console.log('Button Clicked');
        console.log(event.target)
    }

    handleChange = (event) => {
        // console.log(event.target.value)
        this.setState({name: event.target.value});
    }

    handleFocus = (event) => {
        console.log('Focus')
    }

    handleBlur = (event) => {
        if(!this.state.name){
            alert('Please enter your name')
        }
        
        console.log('Blur')
    }

    render() {
        return (
            <div className={classes.app}>
                <h1 className={classes.heading}>Event in React</h1>
                <input className={classes.textField}type="text" value={this.state.name} onChange={this.handleChange} placeholder='Enter your text' onFocus={this.handleFocus} onBlur={this.handleBlur}/> 
                <button className={classes.btn} onClick={this.handleButtonClick}>Click Me</button>
                <br />
                <br />
                {
                    this.state.name && <h2 className={classes.name}>Welcome, {this.state.name}</h2>
                    // or
                    // this.state.name ?<h2 className={classes.name}>Welcome, {this.state.name}</h2> : null

                }
            </div>
        )
    }
}

export default App;
