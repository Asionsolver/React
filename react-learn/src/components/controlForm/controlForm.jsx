import React from "react";

class controlledForm extends React.Component {

    state = {
        name: '',
        email: '',
        password: ''
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };
    
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        event.target.reset();
        this.setState({name : '', email: '', password: ''});
    };

    render() {
        const {name, email, password} = this.state;
        return(
            <div>
                <h2 className="text-center py-2 text-success">Basic Control Form</h2>
                <form className="container" onSubmit={this.handleSubmit}>
                    <input value = {name} className="form-control my-3 border-info" type="text" name = 'name' placeholder="Enter your name" onChange={this.handleChange}/>
                    <input value = {email} className="form-control my-3 border-info" type="text" name = 'email' placeholder="Enter your email" onChange={this.handleChange}/>
                    <input value = {password} className="form-control my-3 border-info" type="text" name = 'password' placeholder="Enter your password" onChange={this.handleChange}/>
                    <input className="form-control my-3 border-info text-bg-success" type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default controlledForm;