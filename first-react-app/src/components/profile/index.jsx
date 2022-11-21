import React,{Component} from "react";
import './profile.style.css'; 
import Bio from './bio';
import Skills from "./skills";
import Links from "./link";




class Profile extends Component {

  me = {
    name: "Ashis Kumar Pal",
    title: "Software Engineer",
    skillA: "HTML",
    skillB: "CSS",
    skillC: "JavaScript",
    skillD: "React",
    skillE: "NodeJS",
  };

  render() {
    // console.log('Profile - ',this.props);
    return (
      <div className="container">
        <Bio name = {this.me.name} title = {this.me.title}/>
        <Skills 
          skillA = {this.me.skillA}
          skillB = {this.me.skillB}
          skillC = {this.me.skillC}
          skillD = {this.me.skillD}
          skillE = {this.me.skillE}
        />
        <Links />
      </div>
    );
  }
}

export default Profile;