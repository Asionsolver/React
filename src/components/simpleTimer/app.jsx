import React, { Component } from 'react';
import './app.style.css';

class App extends Component {
    state = {
        second: 0,
        minutes: 0,
        hours: 0

    };

    intervalId = null;

    incrementCount = () => {
        this.setState({ second: this.state.second + 1 });
        // console.log( this.state.second)
    };

    decrementCount = () => {
        if (this.state.second > 0) {
            this.setState({ second: this.state.second - 1 });
            // console.log( this.state.second)
        }
    };

    startTimer = () => {
        if (this.state.second > 0 && !this.intervalId) {
            this.intervalId = setInterval(() => {
                this.setState({ second: this.state.second - 1 }, () => {
                    if (this.state.second === 0) {
                        alert('Time is up');
                        clearInterval(this.intervalId);
                        this.intervalId = null;
                    }
                });
            }, 1000);
        }
    };

    stopTimer = () => {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    resetTimer = () => {
        this.setState({ second: 0 });
        clearInterval(this.intervalId);
        this.intervalId = null;
    }



    render() {
        return (
            <div className="app">
                <div className='heading'>Simple Timer Website</div>
                <div className="container">
                    <button className='btn' onClick={this.decrementCount}>-</button>
                    <span className="text">{this.state.second} : </span>
                    <button className='btn' onClick={this.incrementCount}>+</button>
                </div>

                <div className="container">
                    <button onClick={this.startTimer} className="btn">Start</button>
                    <button onClick={this.stopTimer} className="btn">Stop</button>
                    <button onClick={this.resetTimer} className="btn">Reset</button>
                </div>
            </div>
        )
    }

}
export default App;
