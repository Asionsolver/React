import React,{Component} from "react";

class Props extends Component{
    clickMe(a){
        alert(a);
      }
    render(){
        return(
            <div>
                <h1>My name is {this.props.name}</h1>
                <h1>My age is {this.props.age}</h1>
                <h1>I am Working start at {this.props.year}</h1>
                <button onClick = {this.clickMe.bind(this,"I am Passing arguments to event handlers through Class Components")}>Click Me</button>
            </div>
        )
    }
}

export default Props;