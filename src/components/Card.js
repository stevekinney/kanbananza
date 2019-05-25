import React from 'react';

const Card = ({ card = {} }) => {
  return (
    <article className="Card">
      <h3>{card.title}</h3>
      <div className="Card-description">{card.description}</div>
    </article>
  );
};

export default Card;
