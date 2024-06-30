import { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import Squares from "./Squares";
import Keyboard from "./Keyboard";
//import HowToModal from "./HowToModal";

function App() {
  const answer = "GUESS";
  const [guesses, setGuesses] = useState(0);
  const [words, setWords] = useState(Array(5).fill("     "));
  const [currentGuess, setCurrentGuess] = useState("");
  const makeGuess = () => {
    const updatedWords = [...words];
    updatedWords[guesses] = currentGuess; 
    setWords(updatedWords);
    if (currentGuess === answer) {
      alert("you win");
    } else {
      setGuesses(prevState => prevState += 1);
      setCurrentGuess("");
    }
    
  };

  useEffect(() => {
    if (currentGuess.length <= 5) {
      const updatedWords = [...words];
      const spacesToAdd = 5 - currentGuess.length;
      updatedWords[guesses] = currentGuess + ' '.repeat(spacesToAdd);
      setWords(prevState => updatedWords);
    }
  }, [currentGuess]);
  return (
    <div className="App">
      <h1>Wordle</h1>
      <Squares
        currentGuess={currentGuess}
        guesses={guesses}
        words={words}
      />
      <Keyboard
        onEnter={makeGuess}
        guesses={guesses}
        updateLetter={letter => {
          if (letter === "DELETE") {
            if (currentGuess.length === 1) {
              return setCurrentGuess("");
            }
            return setCurrentGuess(prevState => prevState.slice(0, -1));
          }
          return setCurrentGuess(prevState => prevState + letter);
        }}
        currentGuess={currentGuess}/>
    </div>
  );
}

export default App;
