import React from 'react';

import CreateCard from './CreateCard';
import CardContainer from '../containers/CardContainer';

const List = ({ list = {}, removeList }) => {
  return (
    <article className="List">
      <h2>{list.title}</h2>
      <CreateCard />
      <div>
        {list.cards.map(cardId => (
          <CardContainer key={cardId} cardId={cardId}/>
        ))}
      </div>
    </article>
  );
};

export default List;
