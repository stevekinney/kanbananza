import React from 'react';

const MoveCardToList = ({ listId, lists, moveCardToList }) => {
  return (
    <select className="Card-move" onChange={moveCardToList} value={listId}>
      {lists.map(list => (
        <option value={list.id} key={list.id}>
          {list.title}
        </option>
      ))}
    </select>
  );
};

export default MoveCardToList;
