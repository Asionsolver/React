import React, { Component } from 'react';

class controlledForm extends Component {
    state = {
        email: '',
        username: '',
        password: '',
        phone: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    } 

    handleSubmit = (event) => {
        event.preventDefault();
        // console.log(event.target.email.value);
        console.log(this.state);
        event.target.reset();
        this.setState({
            email: '',
            username: '',
            password: '',
            phone: ''
        })
        
        
    }



    render() {
        const { email, username, password, phone } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group my-3">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control my-1" id="email" name='email' value={email} onChange={this.handleChange}/>

                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control my-1" id="username" name='username' value={username} onChange={this.handleChange}/>

                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control my-1" id="password" name='password' value={password} onChange={this.handleChange}/>


                        <label htmlFor="phone">Phone</label>
                        <input type="tel" className="form-control my-1" id="phone" name='phone' value={phone} onChange={this.handleChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default controlledForm;

/*
* Index -> State and Logic (Submit Handler, Change Handler, etc.)
* From -> Form JSX

*/
