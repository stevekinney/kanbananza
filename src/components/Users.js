import React from 'react';

import UserContainer from '../containers/UserContainer';
import CreateUserContainer from '../containers/CreateUserContainer';

const Users = ({ users = [] }) => {
  return (
    <section className="Users">
      <h2>Users</h2>
      <CreateUserContainer />
      {users.map(userId => (
        <UserContainer key={userId} userId={userId} />
      ))}
    </section>
  );
};

export default Users;
