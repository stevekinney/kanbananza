import React, { Component, createContext } from 'react';
import { users } from '../default-state.json';

export const UsersContext = createContext();

export class UsersProvider extends Component {
  state = { users };

  createUser = ({ name, email }) => {
    const { users } = this.state;

    const user = {
      id: Date.now().toString(),
      name,
      email,
    };

    this.setState({ users: [...users, user] });
  };

  updateUser = updatedUser => {
    this.setState(({ users }) => {
      return {
        users: users.map(user => {
          return user.id === updatedUser.id ? updatedUser : user;
        }),
      };
    });
  };

  render() {
    const { updateUser, createUser } = this;
    const { users } = this.state;

    return (
      <UsersContext.Provider value={{ users, createUser, updateUser }}>
        {this.props.children}
      </UsersContext.Provider>
    );
  }
}
