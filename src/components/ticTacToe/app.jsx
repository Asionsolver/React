import React from 'react';
import './components/ticTacToe/app.css';
import Game from './components/ticTacToe/game';


const App = () => {
    return (
      <div className='app'>
        <h1>React Tic Tac Toe</h1>
        <Game/>
      </div>

    )
  }



export default App;