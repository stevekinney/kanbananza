import React from 'react';

import CardsContainer from '../containers/CardsContainer';
import CreateCardContainer from '../containers/CreateCardContainer';

const List = ({ list = {} }) => {
  return (
    <article className="List">
      <h2>{list.title}</h2>
      <CreateCardContainer listId={list.id} />
      <div>
        {list.cards.map(cardId => (
          <CardsContainer key={cardId} cardId={cardId} />
        ))}
      </div>
    </article>
  );
};

export default List;
