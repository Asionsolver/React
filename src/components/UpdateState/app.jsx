import React, { Component } from 'react';

class App extends Component {

    state = {
        count: 0
    }


    render() {
        return (
            <div>
                <div>How to Update State in React</div>
                <div>Count: {this.state.count}</div>
                <button onClick={() => { 
                    this.setState((prev)=>{
                        return{
                            count : prev.count + 1
                        }
                    },()=>{  // handle asynchronous behavior
                    console.log(this.state.count);

                    });
                    // this.setState({ count: this.state.count + 1 });
                    // this.state.count = this.state.count + 1;
                    // console.log(this.state.count);
                }}>Increase</button>
            </div>
        );

    }
}

export default App;
