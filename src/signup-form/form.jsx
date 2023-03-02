import PropTypes from 'prop-types';
import React from 'react';
import TextInput from './textInput';


const Form = ({value,handleChange,agreement,errors,handleAgreement,handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <TextInput
                name="name"
                label="Name"
                value={value.name}
                placeholder="Enter your name"
                onChange={handleChange}
                errors={errors.name}
            />
            <TextInput
                name="email"
                type="email"
                label="Email"
                value={value.email}
                placeholder="Enter your email"
                onChange={handleChange}
                errors={errors.email}
            />

            <TextInput
                name="password"
                type="password"
                label="Password"
                value={value.password}
                placeholder="Enter your password"
                onChange={handleChange}
                errors={errors.password}
            />

            <TextInput
                name="birthDate"
                type="date"
                label="Birth Date"
                value={value.birthDate}
                placeholder="Enter your birth date"
                onChange={handleChange}
                errors={errors.birthDate}
            />

            <div className="form-group my-3">
            <label className ="me-4">
                <input className ="me-2" type="radio" name = 'gender' value = 'Male' onChange={handleChange}/>Male
            </label>
            <label className ="me-4">
                <input className ="me-2" type="radio" name = 'gender' value = 'Female' onChange={handleChange}/>Female
            </label>
            <label className ="me-4">
                <input className ="me-2" type="radio" name = 'gender' value = 'Other' onChange={handleChange}/>Other
            </label>
            {errors.gender && <div className='invalid-feedback'>{errors.gender}</div>}
            </div>

            <div className="form-group my-3">
                <label>
                    <input className ="form-group me-2" type='checkbox' name = 'agreement' checked = {agreement} onChange={handleAgreement}/>I agree to the terms and conditions
                </label>
            </div>

            <button type="submit" className="btn btn-primary" disabled={!agreement}>Submit</button>
        </form>
    );
};

Form.propTypes = {
    value: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    agreement: PropTypes.bool.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleAgreement: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
}

export default Form;