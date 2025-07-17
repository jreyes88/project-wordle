import React from "react";

function GuessInput() {
  const [guess, setGuess] = React.useState("");
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        if (guess.length < 5) {
          window.alert("Guess is too short!");
          return;
        } else if (guess.length > 5) {
          window.alert("Guess is too long!");
          return;
        } else {
          console.log(guess);
          setGuess("");
        }
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        minLength="5"
        maxLength="5"
        onChange={(event) => {
          event.preventDefault();
          setGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
