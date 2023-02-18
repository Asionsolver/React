import PropTypes from 'prop-types';
import React from "react";

const TextInput = props => (
    <div className='form-group'>
        <label htmlFor={props.name}>{props.label}</label>
        <input type={props.type} className={props.errors?'from-control  is-invalid' : 'from-control my-3'} id={props.name} name={props.name} value={props.value} onChange={props.onHandleChange} placeholder={props.placeholder}/>
        {props.errors && <div className="invalid-feedback">{props.errors}</div>}
    </div>
    );

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onHandleChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    errors: PropTypes.string
}

TextInput.defaultProps = {
    type: 'text',
    label: '',
    placeholder: ''
}


export default TextInput;