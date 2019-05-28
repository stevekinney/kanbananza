import React from 'react';

const CardAssignment = ({ card = {}, users = [], onAssignCard = () => {} }) => {
  const handleChange = event => {
    const userId = event.target.value;

    if (onAssignCard) onAssignCard(card.id, userId);
  };

  const user = users.find(user => user.id === card.assignedTo);

  return (
    <div className="CardAssignment" style={{ fontSize: '0.8em' }}>
      {card.assignedTo ? (
        <p>
          Card assigned to <strong>{user.name}</strong>.
        </p>
      ) : (
        <p>Card unassigned.</p>
      )}
      <select value={card.assignedTo} onChange={handleChange}>
        <option value="">(Unassigned)</option>
        {users.map(user => (
          <option value={user.id} key={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CardAssignment;
