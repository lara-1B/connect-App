import React from 'react';
import './Card.component.css';

const Card = ({ cardType, children }) => {
  return (
    <div className={`card-container card-container-${cardType}`}>
      {children}
    </div>
  );
};

export default Card;
