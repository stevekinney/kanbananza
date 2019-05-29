import { connect } from 'react-redux';
import Users from '../components/Users';
import { createSelector } from 'reselect';

const getUsers = users => {
  console.log('Getting users');
  return users.ids;
};

const createUserSelector = createSelector(
  state => state.users,
  getUsers,
);

const mapStateToProps = state => {
  return { users: createUserSelector(state) };
};

export default connect(mapStateToProps)(Users);
