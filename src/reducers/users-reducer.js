import { users as defaultUsers } from '../normalized-state';
import { USER_CREATE } from '../actions/user-actions';
import { addEntity } from './_utilities';

const usersReducer = (users = defaultUsers, action) => {
  if (action.type === USER_CREATE) {
    const { user, userId } = action.payload;
    return addEntity(users, user, userId);
  }

  return users;
};

export default usersReducer;
