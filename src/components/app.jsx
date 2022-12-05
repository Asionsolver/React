import React from "react";

import classes from "./app.module.css";


import Inputs from "./inputs/index";


const App = () => {
    return (
        <div className={classes.wrapper}>
            <h1 className="classes.handling">Working with from in React.</h1>
            <hr />
            <Inputs />
        </div>
    )
}
export default App;