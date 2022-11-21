import React,{Component} from "react";

// class Child extends Component{
//     render(){
//         this.props.func(this)
//         return(
//             <h1>Child Component</h1>
//         )
//     }
// }

const ChildComponent = props => (
    <div>
        <h1>I am Child Component</h1>
        <p>I don't know what to do.</p>
        {props.children}
    </div>
)
class App extends Component{

    getContext(context){
        console.log(context);
    }
    render(){
        this.getContext(this )
        return(
            <div className="App">
                <h1>Pass function as props</h1>
                {/* <Child func={this.getContext}/> */}
                <ChildComponent>
                    <h1>I am parents.</h1>
                    <p>I am the parent of child component.</p>
                </ChildComponent>
            </div>
        );
    }
}

export default App;