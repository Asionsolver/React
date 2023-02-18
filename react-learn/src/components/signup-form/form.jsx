import PropTypes from 'prop-types';
import React from 'react';
import TextInput from './textInput';

const Form = ({ value, errors, agreement, handleChange, handleAgreement, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <TextInput name="email" label="Email" type="email" value={value.email} onHandleChange={handleChange} placeholder="Enter Email" errors={errors.email}/>
            <TextInput name="username" label="Username" value={value.username} onHandleChange={handleChange} placeholder="Enter Username" errors={errors.username}/>


            <TextInput name="password" label="Password" type="password" value={value.password} onHandleChange={value.handleChange} placeholder="Enter Password" errors={errors.password}/>

            <TextInput name="phone" label="Phone" type="tel" value={value.phone} onHandleChange={handleChange} placeholder="Enter Phone" errors={errors.phone}/> 
            
            <TextInput name="birthDate" label="BirthDate" type="date" value={value.birthDate} onHandleChange={handleChange} errors={errors.birthDate }/>

            <div className='form-group'>
                <label>
                    <input className='form-group mx-1' type="radio" name="gender" value='Male' onChange={handleChange} />
                </label>Male
                <label className='ms-3'>
                    <input  className='form-group mx-1'type="radio" name="gender" value='Female' onChange={handleChange} />
                </label>female
                <label className='ms-3'>
                    <input className='form-group mx-1' type="radio" name="gender" value='Other' onChange={handleChange} />
                </label>Other
                {errors.gender && <div className='invalid-feedback'>{errors.gender}</div>}
            </div>

            <div className='form-group '>
                <label>
                    <input className='form-group my-3' type="checkbox" name="agreement" checked={agreement} onChange={handleAgreement} />
                </label>I agree to the terms and conditions of this website
            </div>

            <button type="submit" className="btn btn-primary" disabled={!agreement}>Submit</button>

        </form>
    )
};

Form.prototype = {
    value: PropTypes.object.isRequired,
    agreement: PropTypes.bool.isRequired,
    errors: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleAgreement: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired

}


export default Form;