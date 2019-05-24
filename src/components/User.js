import React, { Component } from 'react';
import md5 from 'md5';

const createProfileImageUrl = ({ email }) => {
  const hash = md5(email.trim());
  return `https://www.gravatar.com/avatar/${hash}`;
};

class User extends Component {
  handleChange = (event) => {
    const { user, onUpdateUser } = this.props;
    if (onUpdateUser) onUpdateUser({ ...user, name: event.target.value });
  };

  render() {
    const { user = {} } = this.props;
    const profileImage = createProfileImageUrl(user);

    return (
      <article className="User">
        <img className="User-picture" src={profileImage} alt={user.name} />
        <div className="User-info">
          <h4>{user.name || '[Placeholder]'}</h4>
          <input type="text" value={user.name} onChange={this.handleChange} />
        </div>
      </article>
    );
  }
}

export default User;
