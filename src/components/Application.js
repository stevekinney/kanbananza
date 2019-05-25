import React from 'react';
import ListsContainer from '../containers/ListsContainer';
import CreateListContainer from '../containers/CreateListContainer';

const Application = () => {
  return (
    <main className="Application">
      <div>{/* Users will go here! */}</div>
      <section>
        <CreateListContainer />
        <ListsContainer />
      </section>
    </main>
  );
};

export default Application;
