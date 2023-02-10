import React from "react";
import PropTypes from 'prop-types';
import TextInput from './textInput';

const Form = props => (
    <form onSubmit={props.handleSubmit}>
        <TextInput name='email' label='Email' type='email' value={props.value.email} onHandleChange={props.handleChange} placeholder='Enter Email' />
        <TextInput name='username' label='Username' type='text' value={props.value.username} onHandleChange={props.handleChange} placeholder='Enter Username' />
        <TextInput name='password' label='Password' type='password' value={props.value.password} onHandleChange={props.handleChange} placeholder='Enter Password' />
        <TextInput name='phone' label='Phone' type='tel' value={props.value.phone} onHandleChange={props.handleChange} placeholder='Enter Phone' />
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
)

Form.prototype = {
    value: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}

export default Form;