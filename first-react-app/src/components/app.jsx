import React,{Component} from "react";


import './app.css';
import './css_file/button.css';
import Button from "./css_file/button";
import BoxA from "./css_file/box_a";
import BoxB from "./css_file/box_b";


const myHeader ={
    color: "red",
    fontSize: "40px",
    'text-align': "center",
    fontFamily: "Arial",
    fontWeight: 300
}
class App extends Component {
render() {
    return (
    <div>
        <h1 style = {myHeader}>How to style React app</h1>
        {/* <h1 style = {{
                        color: "Orange",
                        fontSize: "30px",
                        'text-align': "center",
                        fontFamily: "Arial",
                        fontWeight: 500
                        }}>Not Object create directly push style this heading.</h1> */}

     <Button>Click Me</Button>
    <BoxA />
    <BoxB /> 
    </div>
    );
}
}

export default App;