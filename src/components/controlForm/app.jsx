import React from "react";

import classes from "./app.module.css";
import ControlledForm from "./controlForm";

const App = () => {
    return (
        <div className={classes.wrapper}>
            <h1 className={classes.heading}>Working with From in React</h1>
            {/* <Inputs /> */}
            <ControlledForm />
        </div>
    )
}

export default App;