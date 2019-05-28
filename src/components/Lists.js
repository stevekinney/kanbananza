import React from 'react';
import List from './List';

const Lists = ({ lists, onRemoveList }) => {
  return (
    <section className="Lists">
      {lists.map(list => (
        <List list={list} key={list.id} onRemoveList={onRemoveList} />
      ))}
    </section>
  );
};

export default Lists;
