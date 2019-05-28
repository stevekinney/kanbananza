import React from 'react';

import Card from './Card';
import CreateCard from './CreateCard';

const List = ({ list = {}, removeList }) => {
  return (
    <article className="List">
      <h2>{list.title}</h2>
      <CreateCard />
      <div>
        {list.cards.map(cardId => (
          <Card key={cardId} cardId={cardId} listId={list.id} />
        ))}
      </div>
    </article>
  );
};

export default List;
