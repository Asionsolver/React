import React from "react";

class Inputs extends React.Component {

    state = {
        name: "",
        country : "",
        bio : "",
        birthDate : "",
        gender : "",
        agree : false,
        skill : []
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value,
            [event.target.country] : event.target.value,
            [event.target.bio] : event.target.value,
            [event.target.birthDate] : event.target.value,
        })
    }

    handleSkill = (event) => {
        if(event.target.checked){
            this.setState({
                skill : [...this.state.skill, event.target.value]
            })
        }else{
            this.setState({
                skill : this.state.skill.filter(skill => skill !== event.target.value)
            })
        } 
    }

    handleCheckbox = (event) => {
        this.setState({
            agree: event.target.checked
        })
    }

    render() {
        const {name, country, bio, birthDate, agree,skill} = this.state;
        return (
            <div className="container">
                {/* <h2>Inputs</h2> */}
                <input value={name}  onChange={this.handleChange} className="form-control my-2" type="text" name="name" placeholder="Enter your name" />
                <select value={country} onChange={this.handleChange} className="form-control my-2" name="country" id="">
                    <option value="">Select Country</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="India">India</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Nepal">Nepal</option>
                    <option value="Bhutan">Bhutan</option>
                </select>
                
                <textarea value={bio} onChange={this.handleChange} className="form-control my-2" name="bio" placeholder="Tell Me Yourself"></textarea>
                <input value={birthDate}  onChange={this.handleChange} className="form-control my-2" type="date" name="birthDate" />

                <div className="my-2">
                    <input className="mx-2" type="radio" name = 'gender' value='Male' onChange = {this.handleChange}/> Male

                    <input className="mx-2" type="radio" name = 'gender' value='Female' onChange = {this.handleChange}/> Female

                    <input className="mx-2" type="radio" name = 'gender' value='Other' onChange = {this.handleChange}/> Other
                </div>
                <div>
                    My Skill : <br />
                    <input className="mx-2" type="checkbox" name = 'skill' value='HTML' checked = {skill.includes("HTML")} onChange = {this.handleSkill}/> HTML
                    <input className="mx-2" type="checkbox" name = 'skill' value='CSS' checked = {skill.includes("CSS")} onChange = {this.handleSkill}/> CSS
                    <input className="mx-2" type="checkbox" name = 'skill' value='Javascript' checked = {skill.includes("Javascript")} onChange = {this.handleSkill}/> Javascript
                    <input className="mx-2" type="checkbox" name = 'skill' value='Bootstrap' checked = {skill.includes("Bootstrap")} onChange = {this.handleSkill}/> Bootstrap
                    <input className="mx-2" type="checkbox" name = 'skill' value='React' checked = {skill.includes("React")} onChange = {this.handleSkill}/> React
                    <input className="mx-2" type="checkbox" name = 'skill' value='JQuery' checked = {skill.includes("JQuery")} onChange = {this.handleSkill}/> JQuery
                </div>
                <div>
                    <input className="mx-2" type="checkbox" name='agree' checked = {agree} onChange = {this.handleCheckbox}/> I agree all <a href="#">terms</a> and <a href="#">conditions</a> conditions.
                </div>
                <button onClick={()=> console.log(this.state)}>
                    Submit
                </button>
            </div>
        );
    }
}

export default Inputs;
