import React from 'react';
import ListsContainer from '../containers/ListsContainer';
import CreateListContainer from '../containers/CreateListContainer';
import UsersContainer from '../containers/UsersContainer';

const Application = () => {
  return (
    <main className="Application">
      <UsersContainer />
      <section>
        <CreateListContainer />
        <ListsContainer />
      </section>
    </main>
  );
};

export default Application;
