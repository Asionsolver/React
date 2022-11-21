import React,{Component} from "react";
import './profile.style.css'; 
 
class Profile extends Component {
  render() {
    return (
      <div className="container">
        <div className="bio">
            <h3>Ashis Kumar Pal</h3>
            <p>UI & UX Designer and Developer</p>
        </div>

        <div className="skills">
            <h3>My Skills</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node</li>
            </ul>
        </div>

        <div className="social-links">
            <h3>My Social Links: </h3>
            <ul>
                <li>
                <a href="/#">Linkedin</a>
                </li>
                <li>
                <a href="/#">Twitter</a>
                </li>
                <li>
                <a href="/#">Github</a>
                </li>
                <li>
                <a href="/#">Facebook</a>
                </li>
            </ul>
        </div>
        
      </div>
    );
  }
}

export default Profile;