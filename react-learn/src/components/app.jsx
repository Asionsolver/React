import React from "react";

import classes from "./app.module.css";

import UnControlledForm from "./form/unControlledForm";

const App = () => {
    return (
        <div className={classes.wrapper}>
            <h1 className={classes.heading}>Working with From in React</h1>

            {/* <Inputs /> */}
            <UnControlledForm />
        </div>
    )
}

export default App;