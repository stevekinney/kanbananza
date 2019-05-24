import React from 'react';

import CreateUser from './CreateUser';
import User from './User';

const Users = ({ users = [] }) => {
  return (
    <section className="Users">
      <h2>Users</h2>
      <CreateUser />
      {users.map((user) => (
        <User />
      ))}
    </section>
  );
};

export default Users;
