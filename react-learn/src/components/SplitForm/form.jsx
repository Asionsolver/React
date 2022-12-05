import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './textInput';
const Form = props => (
    <form className="container" onSubmit={props.handleSubmit}>
                    <TextInput
                        name="name"
                        label="Enter Name"
                        placeholder="Enter Your Name"
                        value={props.values.name}
                        onChange={props.handleChange}
                    />
                    <TextInput
                        name="email"
                        type='email'
                        label="Enter Email"
                        placeholder="Enter Your Email"
                        value={props.values.email}
                        onChange={props.handleChange}
                    />
                    <TextInput
                        name="password"
                        type='password'
                        label="Enter Password"
                        placeholder="Enter Your Password"
                        value={props.values.password}
                        onChange={props.handleChange}
                    />
                    <input className="form-control my-3 text-white  text-bg-warning" type="submit" value="Submit" />
                </form>
);

Form.propTypes = {
    values: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
};

export default Form;