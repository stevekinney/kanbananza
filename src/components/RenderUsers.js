import React, { Component } from 'react';
import UserStore from './UserStore.js';

class RenderUsers extends Component {
  state = { users: UserStore.users };

  componentDidMount() {
    this.unsubscribe = UserStore.on('change', users =>
      this.setState({ users }),
    );
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { createUser, updateUser } = UserStore;
    const { users } = this.state;

    return <>{this.props.children({ users, createUser, updateUser })}</>;
  }
}

export default RenderUsers;
