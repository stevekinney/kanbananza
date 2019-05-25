import { connect } from 'react-redux';
import { moveCardToList } from '../actions/card-actions';
import MoveCardToList from '../components/MoveCardToList';

const mapStateToProps = state => {
  return { lists: Object.values(state.lists.entities) };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    moveCardToList(event) {
      const destinationListId = event.target.value;
      dispatch(
        moveCardToList(ownProps.cardId, ownProps.listId, destinationListId),
      );
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MoveCardToList);
