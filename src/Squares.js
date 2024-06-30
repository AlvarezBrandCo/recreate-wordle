import React, { useState, useEffect } from "react";

const Squares = ({currentGuess, guesses, words}) => {
  return words.map(g => {
    const letters = g.split("").map(l => <div className="letter">{l}</div>)
    return <div className="word">{letters}</div>
  })
}
export default Squares;
