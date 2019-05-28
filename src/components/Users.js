import React from 'react';

import CreateUser from './CreateUser';
import User from './User';
import withUsers from './withUsers';

const Users = ({ users, onCreateUser, onUpdateUser }) => {
  console.log({ onCreateUser });
  return (
    <section className="Users">
      <h2>Users</h2>
      <CreateUser onCreateUser={onCreateUser} />
      {users.map(user => (
        <User user={user} key={user.id} onUpdateUser={onUpdateUser} />
      ))}
    </section>
  );
};

export default withUsers(Users);
