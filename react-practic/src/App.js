import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Props from './props/props';


function App() {
  return (
    <div className="App">
      <Props age = "23" name = "Asion" year = "2020"/>
      <Props  name = "Asis" age = "25" year = "2021"/>
      <Props age = "24" name = "Ashis" year = "2022"/>
      <Props age = "26" name = "Solver" year = "2023"/>
    </div> 
  );
}

export default App;
