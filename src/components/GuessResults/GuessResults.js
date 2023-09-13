import React from "react";
import Guess from "../Guess/Guess";

import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((rowIndex) => {
        if (guesses[rowIndex]) {
          const { value, id } = guesses[rowIndex];
          return <Guess value={value} key={rowIndex} answer={answer} />;
        } else {
          return (
            <p className="guess" key={rowIndex}>
              {range(5).map((rowIndex) => {
                return <span key={rowIndex} className="cell" />;
              })}
            </p>
          );
        }
      })}
    </div>
  );
}

export default GuessResults;
