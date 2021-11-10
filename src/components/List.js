import React from 'react';
import CreateCardContainer from '../containers/CreateCardContainer';

import CardContainer from './CardContainer';


const List = ({ list = {}, removeList }) => {
  return (
    <article className="List">
      <h2>{list.title}</h2>
      <CreateCardContainer listId={list.id} />
      <div>
        {list.cards.map(cardId => (
          <CardContainer key={cardId} cardId={cardId}  />
        ))}
      </div>
    </article>
  );
};

export default List;
