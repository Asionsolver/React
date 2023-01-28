import React,{Component} from "react";

import "./profile.style.css";

import Bio from "./bio";
import Skills from "./skills";
import Social from "./social";

class Profile extends Component{
    dataA = {
        name: "Ashis Kumar Pal",
        title: "UI & UX Developer",
        skillA: "HTML",
        skillB: "CSS",
        skillC: "JavaScript",
        skillD: "React",
        socialA: "Facebook",
        socialB: "Twitter",
        socialC: "Instagram",
        socialD: "LinkedIn",
        socialE: "Github"
    }
    render(){
        return(
            <div className="container">
                    <Bio name ={this.dataA.name} title = {this.dataA.title}/>
                    <Skills 
                        skillA = {this.dataA.skillA}
                        skillB = {this.dataA.skillB}
                        skillC = {this.dataA.skillC}
                        skillD = {this.dataA.skillD}
                    />
                    <Social socialA = {this.dataA.socialA}
                            socialB = {this.dataA.socialB}
                            socialC = {this.dataA.socialC}
                            socialD = {this.dataA.socialD}
                            socialE = {this.dataA.socialE}
                    />
            </div>
        )
    }
}

export default Profile;

