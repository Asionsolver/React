import React, { Component } from "react";

class app extends Component{
    // ! React 16 before
    // constructor(props){
    //     super(props);
    //     // this.count = 0;
    //     this.state = {
    //         count: 0
    //     }
    // }

    state = {
        count: 0,
        price: 0
    }

    render(){
        // console.log(this.count);
        return (
            <div>
                <h1>Why do we need state</h1>
                <h2>Count = {this.state.count}</h2>
                <button onClick={() => {
                    this.setState({count: this.state.count + 1});   
                    // console.log(this.count);
                    console.log("Clicked", this.state.count);
                } }>Increment</button>
                <br />
                <br />
                <h1>This section is price section</h1>
                <h2>Price = {this.state.price}</h2>
                <button onClick={() => {
                    this.setState({price: this.state.price + 1});   
                    // console.log(this.price);
                    console.log("Clicked", this.state.price);
                } }>Increment</button>
            </div>
        )
    }
}

export default app;