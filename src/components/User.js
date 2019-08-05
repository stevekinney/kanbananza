import React from 'react';
import md5 from 'md5';

const createProfileImageUrl = ({ email }) => {
  const hash = md5(email.trim());
  return `https://www.gravatar.com/avatar/${hash}`;
};

const User = ({ user }) => {
  const profileImage = createProfileImageUrl(user);

  return (
    <article className="User">
      <img className="User-picture" src={profileImage} alt={user.name} />
      <div className="User-info">
        <h2>{user.name}</h2>
      </div>
    </article>
  );
};

export default User;
