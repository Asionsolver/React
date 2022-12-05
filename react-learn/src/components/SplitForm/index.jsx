import React from 'react';
import Form from './form';

class SplitForm extends React.Component{
    state = {
        name: '',
        email: '',
        password: ''
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };
    
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        event.target.reset();
        this.setState({name : '', email: '', password: ''});
    };

    render() {
        // const {name, email, password} = this.state;
        return(
            <div>
                <h2 className="text-center py-2 text-success">Basic Control Form</h2>
                <Form
                    values={this.state}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
            </div>
        )
    }
}

export default SplitForm;