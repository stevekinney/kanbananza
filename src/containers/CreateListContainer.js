import { connect } from 'react-redux';
import CreateList from '../components/CreateList';
import { createList } from '../actions/list-actions';

const mapDispatchToProps = {
  createList,
};

export default connect(
  null,
  mapDispatchToProps,
)(CreateList);
