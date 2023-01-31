import React, { Component } from "react";

// import PassFunctionAsProps from "./passFunctionAsProps";

class Child extends Component {
    render() {
        this.props.func(this)
        return (
            <div>
                <h1>Child</h1>
            </div>
        );
    }
}

const ChildComponent = (props) => (
    <div>
        <h3>I am ChildComponent</h3>
        <p>I don't know what to do</p>
        {props.children}
    </div>
);

class App extends Component {

    getContext(context) {
        console.log(context);
    }
    render() {
        this.getContext(this)
        return (
            <div>
            <h1>App</h1>
            <ChildComponent>
            <h2>Hello, I am from Parent</h2>
                <h4>Hello, I am child of child components</h4>

            </ChildComponent>
            </div>
        );
    }
}

export default App;