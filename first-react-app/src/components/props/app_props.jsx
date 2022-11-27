import React,{Component} from 'react';
import Profile from "../profile";
import Skills from '../profile/skills';
// import MyProps from './props';
import Bio from '../profile/bio';
class App extends Component {
  render() {
    return (
      <div className='App'>
        <Profile />

        <Bio name = "Asion Kumar Pal" title = "UI & UX Designer"/>
        <div className="">
            <h3>List of Programmers</h3>
            <p>Asion Solver</p>
            <Skills skillA='React' skillB='Javascript' skillC='NodeJS' skillD = 'MongoDB' skillE = 'Figma'/>
            <p>Sree Ankit</p>
            <Skills skillA='React' skillB='Javascript' skillC='Redux' skillD = 'MongoDB' skillE = 'Figma' />
            {/* /* <MyProps name = 'Ashis'/>
            <MyProps name = 'Asion'/> */}
        </div>
      </div>
    );
  }
}

export default App;