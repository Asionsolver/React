import React, { Component } from "react";

class Index extends Component {
    state = {
        name: '',
        country: '',
        bio: '',
        birthDate: '',
        gender: '',
        agree: false,
        skills: []
    }

    handleChange = (event) => {
        // console.log(event.target.name);
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleCheckBox = (event) =>{
        this.setState({
            agree:event.target.checked
        })
    }

    handleSkillChange = (event) =>{
        if(event.target.checked){
            this.setState({
                skills: [...this.state.skills, event.target.value]
            })
        }else{
            const filteredSkills = this.state.skills.filter(skill => skill !== event.target.value);
            this.setState({
                skills: filteredSkills
            })
        }
    }

    render() {
        const { name, country, bio, birthDate,skills } = this.state;
        return (
            <div className="container">
                <input className="form-control my-3" type="text" name='name' placeholder="Ashis kumar" onChange={this.handleChange} value ={name} />
                <select className="form-control my-3" name="country" onChange={this.handleChange} value ={country}>
                    <option>Select Country</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="India">India</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Nepal">Nepal</option>
                    <option value="Bhutan">Bhutan</option>
                </select>

                <textarea className="form-control my-3" name="bio" placeholder="Tell me about yourself" onChange={this.handleChange} value ={bio}></textarea>
                <input className="form-control my-3" type="date" name="birthDate" value ={birthDate} onChange={this.handleChange} />

                <div className="form-check">
                <input type="radio" name="gender" value ="Male" onChange={this.handleChange}/> Male
                <input type="radio" name="gender" value ="Female" onChange={this.handleChange} /> Female
                <input type="radio" name="gender" value ="Female" onChange={this.handleChange} /> Other
                </div>
                <div className="skill">
                    <input type="checkbox" name="skills" value="Javascript" onChange={this.handleSkillChange} checked={skills.includes('Javascript')}/>Javascript
                    <input type="checkbox" name="skills" value="React" onChange={this.handleSkillChange} checked={skills.includes('React')}/>React
                    <input type="checkbox" name="skills" value="NodeJs" onChange={this.handleSkillChange} checked={skills.includes('NodeJs')}/>NodeJs
                    <input type="checkbox" name="skills" value="Vue" onChange={this.handleSkillChange} checked={skills.includes('Vue')}/>Vue
                    <input type="checkbox" name="skills" value="AngularJs" onChange={this.handleSkillChange} checked={skills.includes('AngularJs')}/>AngularJs
                </div>

                <div className="check-box">
                    <input type="checkbox" name="agree" onChange={this.handleCheckBox} />I agree all the terms and condition
                </div>
                <button className="btn btn-primary" onClick={()=>console.log(this.state)}>Show Data</button>
            </div>
        );
    }
}

export default Index;