import React, { Component } from "react";
import Form from "./form";
import PropTypes from "prop-types";

const initValue = {
    name: '',
    email: '',
    password: '',
    birthDate: '',
    gender: ''
}

class SignUp extends Component {

    state = {
        value: initValue,
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
        const {errors, isValid} = this.validate();
        if(isValid){
            this.props.createUser(this.state.value);
            console.log(this.state.value);
            event.target.reset();
            this.setState({
                value: initValue,
                agreement: false,
                errors: {}
            })
        } else {
            this.setState({
                errors
            })
        }

    }

    validate = () => {
        const errors = {};
        const {value:{name, email, password, birthDate,gender}} = this.state;
    
        if(!name){
            errors.name = 'Please provide your name';
        } else if(name.length < 3){
            errors.name = 'Name must be at least 3 characters';
        } else if(name.length > 20){
            errors.name = 'Name must be less than 20 characters';
        }

        if(!email){
            errors.email = 'Please provide your email';
        }

        if(!password){
            errors.password = 'Please provide your password';
        }   else if(password.length < 6){
            errors.password = 'Password must be at least 6 characters';
        } else if(password.length > 20){
            errors.password = 'Password must be less than 20 characters';
        }

        if(!birthDate){
            errors.birthDate = 'Please provide your birth date';
        } 

        if(!gender){
            errors.gender ="Please select your gender";
        }

        return{
            errors,
            isValid: Object.keys(errors).length === 0
        }

    }


    render() {
        return (
            <div>
                <h1>Sign Up</h1>
                <Form value={this.state.value} errors={this.state.errors} handleChange={this.handleChange}  agreement={this.state.agreement}
                handleAgreement={this.handleAgreement} handleSubmit={this.handleSubmit}
                />
            </div>
        )
    }
}

SignUp.propTypes = {
    createUser: PropTypes.func.isRequired
}

export default SignUp;