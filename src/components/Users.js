import React from 'react';

import CreateUser from './CreateUser';
import User from './User';
import { UsersContext } from './UsersContext';

const Users = () => {
  return (
    <section className="Users">
      <h2>Users</h2>
      <UsersContext.Consumer>
        {({ users, createUser, updateUser }) => (
          <section>
            <CreateUser onCreateUser={createUser} />
            {users.map(user => (
              <User user={user} key={user.id} onUpdateUser={updateUser} />
            ))}
          </section>
        )}
      </UsersContext.Consumer>
    </section>
  );
};

export default Users;
