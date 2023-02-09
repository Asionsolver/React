import React, { Component } from "react";

class Index extends Component {
    state = {
        name: '',
        country: '',
        bio: '',
        birthDate: ''
    }

    handleChange = (event) => {
        // console.log(event.target.name);
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        const { name, country, bio, birthDate } = this.state;
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
                <button className="btn btn-primary" onClick={()=>console.log(this.state)}>Show Data</button>
            </div>
        );
    }
}

export default Index;