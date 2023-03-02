import React, { Component } from 'react';
import './components/signup-form/app.module.css';
import SignUp from './components/signup-form/index';

class App extends Component {
  state = {
    users: []
  };

  createUser = user => {
    user.id = new Date().getTime().toString();
    this.setState({
      users: [...this.state.users, user]
    });
  };
  render() {
    return (
      <div>
        <SignUp createUser={this.createUser}/>
        <div className="my-5">
          <h3>All Registered Users</h3>
          <ul className="list-group">
            {this.state.users.map(user => (
              <li key={user.id} className="list-group-item">
                {user.name}->{user.email}
              </li>
            ))}
          </ul>
        </div>
      </div>

    )
  }
}


export default App;
