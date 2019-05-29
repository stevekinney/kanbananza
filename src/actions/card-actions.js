const CREATE_CARD = 'CREATE_CARD';

const defaultCardData = {
  title: '',
  description: '',
  assignedTo: '',
};

export const createCard = (listId, cardData) => {
  const cardId = Date.now().toString();
  const card = {
    id: cardId,
    ...defaultCardData,
    ...cardData,
  };

  return {
    type: 'CARD_CREATE',
    payload: { card, listId, cardId },
  };
};
