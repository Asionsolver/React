import React from 'react';
import "./components/profile/profile.style.css";
// import logo from './logo.svg';
import './App.css';
import Profile from './components/profile/profile';
import Bio from './components/profile/bio';
import Skills from './components/profile/skills';
import Social from './components/profile/social';


function App() {
  return (
    <div className="App">
      <Profile />
      <div className="container">
        <Bio name = "Asion" title = "Backend Developer" />
      <Skills skillA= "Node.js"
        skillB= "Python"
        skillC= "Java"
        skillD= "Bootstrap" />
      <Social  socialA= "Facebook"
        socialB= "Twitter"
        socialC= "Instagram"
        socialD= "LinkedIn"
        socialE= "Github"/> 
      </div>    
    </div> 
  );
}

export default App;