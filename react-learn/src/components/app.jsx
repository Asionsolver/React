import React from "react";

import classes from "./app.module.css";
import SplitForm from "./SplitForm/index";

const App = () => {
    return (
        <div className={classes.wrapper}>
            <h1 className={classes.heading}>Working with From in React</h1>
            <SplitForm />
        </div>
    )
}

export default App;