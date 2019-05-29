import { connect } from 'react-redux';
import { moveCardToList } from '../actions/card-actions';
import MoveCardToList from '../components/MoveCardToList';
import { createSelector } from 'reselect';

const getListEntities = state => state.lists.entities;

const getLists = createSelector(
  [getListEntities],
  lists => {
    console.log('Generating an array of the lists');
    return Object.values(lists);
  },
);

const mapStateToProps = state => {
  return { lists: getLists(state) };
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
