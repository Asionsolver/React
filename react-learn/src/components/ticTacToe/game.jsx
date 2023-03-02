import React, { Component } from "react";
import Board from "./board";

class Game extends Component {
    render() {
        return (
            <div >
                <h1>This is Game Components.</h1>
                <Board/>
            </div>
        );
    }
}

export default Game;