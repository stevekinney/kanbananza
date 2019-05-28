import React from 'react';
import List from './List';

const Lists = ({ lists, onRemoveList, onRemoveCard }) => {
  return (
    <section className="Lists">
      {lists.map(list => (
        <List
          list={list}
          key={list.id}
          onRemoveList={onRemoveList}
          onRemoveCard={onRemoveCard}
        />
      ))}
    </section>
  );
};

export default Lists;
