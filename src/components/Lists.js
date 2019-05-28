import React from 'react';
import List from './List';

const Lists = ({
  lists,
  users,
  onRemoveList,
  onRemoveCard,
  onCreateCard,
  onListChange,
  onAssignCard,
}) => {
  return (
    <section className="Lists">
      {lists.map(list => (
        <List
          list={list}
          lists={lists}
          key={list.id}
          users={users}
          onCreateCard={onCreateCard}
          onRemoveList={onRemoveList}
          onRemoveCard={onRemoveCard}
          onListChange={onListChange}
          onAssignCard={onAssignCard}
        />
      ))}
    </section>
  );
};

export default Lists;
