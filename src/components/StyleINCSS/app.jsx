import React, { Component } from 'react';
import AppStyle from './app.module.css';
import CssModule from './cssModule';


class App extends Component {
    render() {
        return (
            <div className='app'>
                <h1 className='heading'>What is CSS Module in React </h1>
                <button className={AppStyle.btn}>Module</button>
                <CssModule />
            </div>
        )
    }
}

export default App;