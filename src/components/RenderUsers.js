import React, { Component } from 'react';
import { users } from '../default-state.json';

class RenderUsers extends Component {
  state = { users };

  onCreateUser = ({ name, email }) => {
    const { users } = this.state;

    const user = {
      id: Date.now().toString(),
      name,
      email,
    };

    this.setState({ users: [...users, user] });
  };

  onUpdateUser = updatedUser => {
    this.setState(({ users }) => {
      return {
        users: users.map(user => {
          return user.id === updatedUser.id ? updatedUser : user;
        }),
      };
    });
  };

  render() {
    const { onCreateUser, onUpdateUser } = this;
    const { users } = this.state;

    return <>{this.props.children({ users, onCreateUser, onUpdateUser })}</>;
  }
}

export default RenderUsers;
