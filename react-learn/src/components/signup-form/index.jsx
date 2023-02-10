import React, { Component } from 'react';
import './app.module.css';
import Form from './form';

const initialState = {
    value: {
        email: '',
        username: '',
        password: '',
        phone: '',
        birthDate: '',
        gender: ''
    }
}


class SignUp extends Component {
    state = {
        value: initialState,
        agreement: false
    }

    handleChange = (event) => {
        this.setState({
            value: {
                ...this.state.value,
                [event.target.name]: event.target.value
            }
        })
    }

    handleAgreement = (event) => {
        this.setState({
            agreement: event.target.checked
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.value);
        event.target.reset();
        this.setState({
            value: initialState,
            agreement: false
        })
    }


    render() {
        return (
            <div>
                <h1>Signup From</h1>
                <Form value={this.state.value} handleChange={this.handleChange} handleSubmit={this.handleSubmit} handleAgreement={this.handleAgreement} agreement={this.state.agreement} />
            </div>
        )
    }
}

export default SignUp;
