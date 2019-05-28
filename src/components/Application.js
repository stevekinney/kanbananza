import React, { Component } from 'react';
import CreateList from './CreateList';
import Lists from './Lists';

import defaultState from '../default-state.json';

class Application extends Component {
  state = { lists: defaultState.lists };

  removeList = targetListId => {
    let { lists } = this.state;

    lists = lists.filter(list => list.id !== targetListId);

    this.setState({ lists });
  };

  render() {
    const { lists } = this.state;
    return (
      <main className="Application">
        <div>{/* Users will go here! */}</div>
        <section>
          <CreateList />
          <Lists lists={lists} onRemoveList={this.removeList} />
        </section>
      </main>
    );
  }
}

export default Application;
