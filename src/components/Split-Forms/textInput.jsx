import React from "react";
import PropTypes from 'prop-types';

const TextInput = props => (
    <div className="form-group my-3">
        <label htmlFor={props.name}>{props.label}</label>
        <input type={props.type} className="form-control my-1" id={props.name} name={props.name} value={props.value} onChange={props.onHandleChange} placeholder={props.placeholder} />
    </div>
);

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onHandleChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string
}

TextInput.defaultProps = {
    type: 'text',
    label: '',
    placeholder: ''
}


export default TextInput;