import React, { useState } from 'react';
import './Card.css';

const Card = () => {
  const rows = 23;
  const cols = 10;
  const totalCells = rows * cols;

  const cardData = Array.from({ length: totalCells }, (_, i) => i + 1);
  const [highlightedCells, setHighlightedCells] = useState(new Set());

  const handleCellClick = (number) => {
    const newHighlightedCells = new Set(highlightedCells);
    if (newHighlightedCells.has(number)) {
      newHighlightedCells.delete(number);
    } else {
      newHighlightedCells.add(number);
    }
    setHighlightedCells(newHighlightedCells);
  };

  const isHighlighted = (number) => highlightedCells.has(number);

  const getCellStyle = (number) => {
   
    if (number <= 100 && (number - 1) % 11 === 0) {
      return 'blue';
    }
  
    if (number >= 109 && number <= 181 && (number - 109) % 9 === 0) {
      return 'blue';
    }
   
    if (number >= 192 && number <= 230 && (number - 192) % 11 === 0) {
      return 'blue';
    }
    return '';
  };

  const renderGrid = () => {
    return cardData.map((number) => (
      <div
        key={number}
        className={`cell ${getCellStyle(number)} ${isHighlighted(number) ? 'highlighted' : ''}`}
        onClick={() => handleCellClick(number)}
      >
        {number}
      </div>
    ));
  };

  return (
    <div className="card-container">
      <div className="grid">
        {renderGrid()}
      </div>
    </div>
  );
};

export default Card;
