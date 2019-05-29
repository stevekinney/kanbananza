import { connect } from 'react-redux';
import List from '../components/List';
import { removeList } from '../actions/list-actions';

const mapStateToProps = (state, ownProps) => {
  return { list: state.lists.entities[ownProps.listId] };
};

const mapDispatchToProps = {
  removeList,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);
