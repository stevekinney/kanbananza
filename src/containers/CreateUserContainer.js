import { connect } from 'react-redux';
import { createUser } from '../actions/user-actions';
import CreateUser from '../components/CreateUser';

export default connect(
  null,
  { createUser },
)(CreateUser);
