import PropTypes from "prop-types";
import React from "react";

const TextInput = props => (
    <div className="form-group my-3">
        <label htmlFor={props.name}>{props.label}</label>
        <input
            className={props.errors ? "form-control is-invalid" : "form-control"}
            type={props.type}
            name={props.name}
            value={props.value}
            id = {props.name}
            placeholder={props.placeholder}
            onChange={props.onChange}

        />
        {props.errors && <div className="invalid-feedback">{props.errors}</div>}
    </div>
);

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    errors : PropTypes.string
};

TextInput.defaultProps = {
    type: "text",
    label: "",
    placeholder: "",
};

export default TextInput;