import React, { Component } from 'react';

class UnControlledForm extends Component {
    handleSubmit = (event) => {
        event.preventDefault();
        // console.log(event.target.email.value);
        const data = {};
        data.email = event.target.email.value;
        data.username = event.target.username.value;
        data.password = event.target.password.value;
        data.phone = event.target.phone.value;
        console.log(data);
        event.target.reset();
    }



    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group my-3">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control my-1" id="email" name='email' />

                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control my-1" id="username" name='username' />

                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control my-1" id="password" name='password' />


                        <label htmlFor="phone">Phone</label>
                        <input type="tel" className="form-control my-1" id="phone" name='phone' />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default UnControlledForm;
