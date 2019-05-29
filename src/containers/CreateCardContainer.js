import { connect } from 'react-redux';
import CreateCard from '../components/CreateCard';
import { createCard } from '../actions/card-actions';

export default connect(
  null,
  { createCard },
)(CreateCard);
