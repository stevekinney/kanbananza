import { connect } from 'react-redux';
import Card from '../components/Card';
import { removeCard } from '../actions/card-actions';

const findListIdForCard = (lists, cardId) => {
  for (const [listId, list] of Object.entries(lists)) {
    if (list.cards.includes(cardId)) return listId;
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    card: state.cards.entities[ownProps.cardId],
    listId: findListIdForCard(state.lists.entities, ownProps.cardId),
  };
};

export default connect(
  mapStateToProps,
  { removeCard },
)(Card);
