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
        agreement: false,
        errors: {}
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
        const { errors, isValid } = this.validate();
        if(isValid){
            console.log(this.state.value);
            event.target.reset();
            this.setState({value: initialState, agreement: false, errors: {}});
        } else {
            // console.log(errors);
            this.setState({ errors });
        } 
    }

    validate = () => {
        const errors = {};
        const { value:{username, email, password,phone,gender,birthDate} } = this.state;

        if(!username){
            errors.username = 'username is required.';
        } else if(username.length < 3){
            errors.username = 'username must be at least 3 characters long.';
        } else if(username.length > 20){
            errors.username = 'username must be less than 20 characters long.';
        }

        if(!email){
            errors.email = 'Email is required.';
        } else if(!email.includes('@')){
            errors.email = 'Email must be valid.';
        } else if(email.length > 30){
            errors.email = 'Email must be less than 30 characters long.';
        }

        if(!password){
            errors.password = 'Password is required.';
        } else if(password.length < 6){
            errors.password = 'Password must be at least 6 characters long.';
        } else if(password.length > 20){
            errors.password = 'Password must be less than 20 characters long.';
        }

        if(!phone){
            errors.phone = 'Phone is required.';
        } else if(phone.length < 10){
            errors.phone = 'Phone must be at least 10 characters long.';
        }

        if(!birthDate){
            errors.birthDate = 'Birth Date is required.';
        }

        if(!gender){
            errors.gender = 'Please select your gender.';
        }

        return {
            errors,
            isValid: Object.keys(errors).length === 0
        }

    }


    render() {
        return (
            <div>
                <h1>Signup From</h1>
                <Form value={this.state.value} handleChange={this.handleChange} handleSubmit={this.handleSubmit} handleAgreement={this.handleAgreement} agreement={this.state.agreement} errors ={this.state.errors} />
            </div>
        )
    }
}

export default SignUp;
