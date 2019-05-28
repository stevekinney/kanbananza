import React, { Component } from 'react';
import { users } from '../default-state.json';

const withUsers = WrappedComponent => {
  return class extends Component {
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
      const { users } = this.state;
      console.log(this.onCreateUser);
      return (
        <WrappedComponent
          users={users}
          onCreateUser={this.onCreateUser}
          onUpdateUser={this.onUpdateUser}
          {...this.props}
        />
      );
    }
  };
};

export default withUsers;
