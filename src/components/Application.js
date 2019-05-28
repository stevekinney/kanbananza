import React, { Component } from 'react';
import CreateList from './CreateList';
import Lists from './Lists';

import defaultState from '../default-state.json';

class Application extends Component {
  state = { lists: defaultState.lists };

  createList = ({ title }) => {
    const { lists } = this.state;

    const list = {
      title,
      id: Date.now().toString(),
      cards: [],
    };

    console.log(list);

    this.setState({ lists: [...lists, list] });
  };

  removeList = targetListId => {
    let { lists } = this.state;

    lists = lists.filter(list => list.id !== targetListId);

    this.setState({ lists });
  };

  removeCard = (listId, cardId) => {
    let { lists } = this.state;

    const targetList = lists.find(list => list.id === listId);

    const remainingCards = targetList.cards.filter(({ id }) => id !== cardId);
    const updatedList = { ...targetList, cards: remainingCards };

    lists = lists.map(list => {
      return list.id === listId ? updatedList : list;
    });

    this.setState({ lists });
  };

  render() {
    const { lists } = this.state;
    return (
      <main className="Application">
        <div>{/* Users will go here! */}</div>
        <section>
          <CreateList onCreateList={this.createList} />
          <Lists
            lists={lists}
            onRemoveList={this.removeList}
            onRemoveCard={this.removeCard}
          />
        </section>
      </main>
    );
  }
}

export default Application;
