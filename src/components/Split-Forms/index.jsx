import React, { Component } from 'react';
import Form from './form';

class Index extends Component {
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
        return (
            <div>
                <Form value={this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default Index;

/*
* Index -> State and Logic (Submit Handler, Change Handler, etc.)
* From -> Form JSX

*/
