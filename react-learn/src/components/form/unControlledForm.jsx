import React,{Component} from "react";

class UnControlledForm extends Component {
    render() {
        return(
            <div>
                <h1>Basic Form</h1>
                <form>
                    <input type="text" name = 'name' placeholder="Enter your name" />
                </form>
            </div>
        )
    }
}

export default UnControlledForm;

