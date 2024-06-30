# Recreate Wordle

# 1. Game Setup

### Word List
- **Predefined Word List**: Load a list of valid 5-letter words.
- **Hidden Word Selection**: Randomly select a hidden word from the list at the start of each game.

### User Interface
- **Input Field**: Create an input field where the player can enter a 5-letter word.
- **Submit Button**: Add a button to submit the guess.
- **Feedback Display**: Set up an area to display feedback for each guess.
- **Guess History**: Create a section to show the history of guesses and feedback.

## 2. Game Logic

### Input Handling
- **Validate Length**: Ensure the guess is exactly 5 letters long.
- **Check Validity**: Confirm the guess is a valid word from the word list.
- **Prevent Duplicates**: Check if the guess has already been made and prevent duplicate guesses.

### Feedback Mechanism
- **Correct Position**: Highlight letters that are correct and in the correct position (e.g., green).
- **Incorrect Position**: Highlight letters that are correct but in the wrong position (e.g., yellow).
- **Absent Letters**: Indicate letters that are not in the hidden word (e.g., gray).

### Game Flow
- **Start Game**: Initialize the game by selecting a random word from the word list.
- **Guess Limit**: Allow the player up to 6 guesses.
- **Check Win Condition**: If the player guesses the word correctly, display a win message.
- **Check Loss Condition**: If the player exhausts all guesses without guessing the word, display a loss message and reveal the hidden word.

## 3. Feedback and Updates

### Feedback Display
- **Update UI**: After each guess, update the user interface to show the feedback.
- **Color Coding**: Use specific colors (green for correct position, yellow for incorrect position, gray for absent letters) to provide clear feedback.

### Guess History
- **Track Guesses**: Maintain a record of all guesses made by the player.
- **Display History**: Show the history of guesses along with the corresponding feedback.

## 4. Error Handling

### Invalid Input
- **Notify Player**: Inform the player if the input is not a valid 5-letter word.
- **Retry Input**: Allow the player to correct their input and try again.

### Duplicate Guess
- **Notify Player**: Inform the player if they have already guessed the word.
- **Retry Guess**: Allow the player to make a new guess.

## 5. End of Game

### Win Condition
- **Display Message**: Congratulate the player and show a win message.
- **Reveal Word**: Optionally, display the hidden word even if guessed correctly.

### Loss Condition
- **Display Message**: Inform the player that they have lost and display a loss message.
- **Reveal Word**: Show the hidden word that was not guessed.

## 6. User Experience

### Instructions
- **Game Rules**: Provide clear instructions on how to play the game.
- **Feedback Explanation**: Explain what the colors mean in the feedback display.

### Responsiveness
- **Adapt to Devices**: Ensure the game interface works well on different devices and screen sizes.

### Accessibility
- **Color Alternatives**: Provide alternatives to color-coding (e.g., patterns or text indicators) for colorblind players.
