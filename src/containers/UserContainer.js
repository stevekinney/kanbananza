import { connect } from 'react-redux';
import User from '../components/User';

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.entities[ownProps.userId] };
};

export default connect(mapStateToProps)(User);
