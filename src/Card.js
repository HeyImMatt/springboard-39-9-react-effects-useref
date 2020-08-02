import React from 'react';
import './Card.css';

function Card({ card, idx }) {
  return (
    <div key={idx} 
    className="Card" 
    style={{
      backgroundImage: `url(${card.image})`, 
      transform: card.rotate}}
    />)
}

export default Card;