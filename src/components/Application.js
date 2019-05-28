import React, { Component } from 'react';
import CreateList from './CreateList';
import Lists from './Lists';

import defaultState from '../default-state.json';
import Users from './Users';

class Application extends Component {
  state = { lists: defaultState.lists, users: defaultState.users };

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

  createCard = (listId, { title, description }) => {
    let { lists } = this.state;
    const card = { id: Date.now().toString(), title, description };

    lists = lists.map(list => {
      if (list.id === listId) {
        return { ...list, cards: [...list.cards, card] };
      }
      return list;
    });

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

  moveCardToList = (targetListId, targetCard) => {
    let { lists } = this.state;

    lists = lists.map(list => {
      let newCards;
      if (list.id === targetListId) {
        newCards = [...list.cards, targetCard];
      } else {
        newCards = list.cards.filter(card => card.id !== targetCard.id);
      }
      return { ...list, cards: newCards };
    });

    this.setState({ lists });
  };

  createUser = ({ name, email }) => {
    const { users } = this.state;

    const user = {
      id: Date.now().toString(),
      name,
      email,
    };

    this.setState({ users: [...users, user] });
  };

  updateUser = updatedUser => {
    this.setState(({ users }) => {
      return {
        users: users.map(user => {
          return user.id === updatedUser.id ? updatedUser : user;
        }),
      };
    });
  };

  assignCard = (cardId, userId) => {
    let { lists } = this.state;

    lists = lists.map(list => {
      if (!list.cards.find(card => card.id === cardId)) return list;
      const cards = list.cards.map(card => {
        if (card.id === cardId) {
          if (!userId) return { ...card, assignedTo: '' };
          return { ...card, assignedTo: userId };
        }
        return card;
      });
      return { ...list, cards };
    });

    console.log(lists);

    this.setState({ lists });
  };

  render() {
    const { lists, users } = this.state;
    return (
      <main className="Application">
        <Users
          users={users}
          onCreateUser={this.createUser}
          onUpdateUser={this.updateUser}
        />
        <section>
          <CreateList onCreateList={this.createList} />
          <Lists
            lists={lists}
            users={users}
            onCreateCard={this.createCard}
            onRemoveList={this.removeList}
            onRemoveCard={this.removeCard}
            onListChange={this.moveCardToList}
            onAssignCard={this.assignCard}
          />
        </section>
      </main>
    );
  }
}

export default Application;
