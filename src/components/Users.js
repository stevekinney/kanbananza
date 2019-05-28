import React from 'react';

import CreateUser from './CreateUser';
import User from './User';
import RenderUsers from './RenderUsers';

const Users = () => {
  return (
    <section className="Users">
      <h2>Users</h2>
      <RenderUsers>
        {({ users, createUser, updateUser }) => (
          <section>
            <CreateUser onCreateUser={createUser} />
            {users.map(user => (
              <User user={user} key={user.id} onUpdateUser={updateUser} />
            ))}
          </section>
        )}
      </RenderUsers>
    </section>
  );
};

export default Users;
