import React,{Component} from "react";

class App extends Component {

    // constructor(props) {
    //     super(props);
    //     this.count = 0;
    //     this.state = {
    //         count: 0
    //     };
    // }

    state = {
        count: 0
    };
    // count = 10;

    render() {
        // console.log(this.count);
        return (
            <div className="App  ">
                <h1>Why do We Need State in React</h1>
                <h1>Count = {this.state.count}</h1>
                <button onClick={()=> {
                        // this.count++;
                        this.setState({count: this.state.count + 1});
                        console.log('Clicked...',this.state.count);
                }}> Increment</button>
            </div>
        );
    }
}

export default App;