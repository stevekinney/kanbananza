import React, { Component } from 'react';

import CardAssignment from './CardAssignment';

import RenderUsers from './RenderUsers';
import { UsersContext } from './UsersContext';

class Card extends Component {
  state = { showOptions: false };

  toggleOptions = () => {
    this.setState(prevState => {
      return { ...prevState, showOptions: !prevState.showOptions };
    });
  };

  handleChange = event => {
    const newListId = event.target.value;
    const { card } = this.props;

    this.props.onListChange(newListId, card);
  };

  render() {
    const {
      card = {},
      lists = [],
      listId,
      onRemoveCard,
      onAssignCard,
    } = this.props;
    const { showOptions } = this.state;
    const removeCard = () => onRemoveCard(listId, card.id);

    return (
      <article className="Card">
        <h3>{card.title}</h3>
        <div className="Card-description">{card.description}</div>
        {showOptions && (
          <div className="Card-options">
            <select
              className="Card-move"
              onChange={this.handleChange}
              value={listId}
            >
              {lists.map(list => (
                <option value={list.id} key={list.id}>
                  {list.title}
                </option>
              ))}
            </select>
            <UsersContext.Consumer>
              {({ users }) => (
                <CardAssignment
                  card={card}
                  onAssignCard={onAssignCard}
                  users={users}
                />
              )}
            </UsersContext.Consumer>
            <button onClick={removeCard} className="Card-remove danger">
              Remove Card
            </button>
          </div>
        )}
        <button className="Card-toggle" onClick={this.toggleOptions}>
          Toggle Options
        </button>
      </article>
    );
  }
}

export default Card;
