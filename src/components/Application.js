import React, { Component } from 'react';
import CreateList from './CreateList';
import Lists from './Lists';

// import defaultState from '../default-state.json';

class Application extends Component {
  render() {
    return (
      <main className="Application">
        <div>{/* Users will go here! */}</div>
        <section>
          <CreateList />
          <Lists />
        </section>
      </main>
    );
  }
}

export default Application;
