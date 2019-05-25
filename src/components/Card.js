import React from 'react';
import MoveCardToListContainer from '../containers/MoveCardToListContainer';

const Card = ({ card = {}, listId, removeCard }) => {
  return (
    <article className="Card">
      <h3>{card.title}</h3>
      <div className="Card-description">{card.description}</div>
      <MoveCardToListContainer cardId={card.id} listId={listId} />
      <button
        onClick={() => removeCard(card.id, listId)}
        className="Card-remove danger"
      >
        Remove Card
      </button>
    </article>
  );
};

export default Card;
