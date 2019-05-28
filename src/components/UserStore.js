import { EventEmitter } from 'events';
import { users } from '../default-state.json';

class UserStore extends EventEmitter {
  users = users;

  createUser = ({ name, email }) => {
    const user = {
      id: Date.now().toString(),
      name,
      email,
    };

    this.users = [...this.users, user];

    this.emit('change', this.users);
  };

  updateUser = updatedUser => {
    this.users = this.users.map(user => {
      return user.id === updatedUser.id ? updatedUser : user;
    });

    this.emit('change', this.users);
  };
}

export default new UserStore();
