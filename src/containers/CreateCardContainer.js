import { connect } from 'react-redux';
import CreateCard from '../components/CreateCard';

const defaultCardData = {
  title: '',
  description: '',
  assignedTo: '',
};

const mapDispatchToProps = dispatch => {
  return {
    createCard(listId, cardData) {
      const cardId = Date.now().toString();
      const card = {
        id: cardId,
        ...defaultCardData,
        ...cardData,
      };
      dispatch({
        type: 'CARD_CREATE',
        payload: { card, listId, cardId },
      });
    },
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(CreateCard);
