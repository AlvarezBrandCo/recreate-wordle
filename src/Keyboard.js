import React, { useState } from 'react';

const KEY_LAYOUT = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'DELETE']
];

const Keyboard = ({onEnter, guesses, updateLetter, currentGuess}) => {
  const handleKeyClick = (key) => {
    if (key === 'DELETE') {
      updateLetter(key)
    } else if (key === 'ENTER') {
      onEnter()
    } else if (currentGuess.length === 5) {
      return alert("nope")
    } else {
      updateLetter(key)
    }
  };

  return (
    <div className="keyboard">
      {KEY_LAYOUT.map((row, rowIndex) => (
        <div className="key-row" key={rowIndex}>
          {row.map((key) => (
            <button
              disabled={guesses > 5}
              key={key}
              className={`key ${key}`}
              onClick={() => handleKeyClick(key)}
            >
              {key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
