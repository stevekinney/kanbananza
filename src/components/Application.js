import React from 'react';

import Users from './Users';
import CreateList from './CreateList';
import ListsContainer from '../containers/ListsContainer';

const Application = () => {
  return (
    <main className="Application">
      <Users />
      <section>
        <CreateList />
        <ListsContainer />
      </section>
    </main>
  );
};

export default Application;
