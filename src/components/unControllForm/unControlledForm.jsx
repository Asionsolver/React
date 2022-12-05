import React from "react";

class UnControlledForm extends React.Component {

    handleSubmit = (event) => {
        event.preventDefault();
        // console.dir(event.target);
        const data ={}
        data.name = event.target.name.value;
        data.email = event.target.email.value;
        data.password = event.target.password.value;
        // console.log(event.target.name.value);
        console.log(data);
        event.target.reset();
    }

    render() {
        return(
            <div>
                <h2 className="text-center py-2 text-success">Basic Form</h2>
                <form className="container" onSubmit={this.handleSubmit}>
                    <input className="form-control my-3 border-info" type="text" name = 'name' placeholder="Enter your name" />
                    <input className="form-control my-3 border-info" type="text" name = 'email' placeholder="Enter your email" />
                    <input className="form-control my-3 border-info" type="text" name = 'password' placeholder="Enter your password" />
                    <input className="form-control my-3 border-info text-bg-success" type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default UnControlledForm;

