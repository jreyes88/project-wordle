import React from "react";

function GuessInput({ gameStatus, handleSubmitGuess }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");
  function handleSubmit(event) {
    // Prevent page reload
    event.preventDefault();

    // Fallback validation in case minLength and maxLength don't work
    if (tentativeGuess.length !== 5) {
      window.alert("Your word must be five letters long.");
      return;
    }

    // Add tentativeGuess to guesses
    handleSubmitGuess(tentativeGuess);

    // Reset guess input value
    const nextGuess = "";
    setTentativeGuess(nextGuess);
  }
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        disabled={gameStatus !== "running"}
        minLength={5}
        maxLength={5}
        pattern="[A-Za-z]{5}"
        title="Your word must be five letters long."
        value={tentativeGuess}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setTentativeGuess(nextGuess);
        }}
      />
    </form>
  );
}

export default GuessInput;
