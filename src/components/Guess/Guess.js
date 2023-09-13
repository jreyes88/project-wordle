import React from "react";
import { checkGuess } from "../../game-helpers";

function Guess({ value, answer }) {
  const checkedGuess = checkGuess(value, answer);
  return (
    <p className="guess">
      {checkedGuess.map(({ letter, status }, i) => {
        return (
          <span key={i} className={`cell ${status}`}>
            {letter}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
