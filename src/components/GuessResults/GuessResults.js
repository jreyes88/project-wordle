import React from "react";

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map((guess, index) => {
        return (
          <p className="guess" key={index}>
            {guess}
          </p>
        );
      })}
    </div>
  );
}

export default GuessResults;
