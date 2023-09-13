import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import WonBanner from "../WonBanner/WonBanner";
import LostBanner from "../LostBanner/LostBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  const [gameStatus, setGameStatus] = React.useState("running");

  function handleSubmitGuess(tentativeGuess) {
    const nextGuesses = [...guesses];
    const nextGuess = {
      value: tentativeGuess,
      id: crypto.randomUUID(),
    };
    nextGuesses.push(nextGuess);
    setGuesses(nextGuesses);

    if (
      nextGuesses.length >= NUM_OF_GUESSES_ALLOWED &&
      tentativeGuess.toUpperCase() !== answer
    ) {
      const nextGameStatus = "lost";
      setGameStatus(nextGameStatus);
    }
    if (tentativeGuess.toUpperCase() === answer) {
      const nextGameStatus = "won";
      setGameStatus(nextGameStatus);
    }
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        gameStatus={gameStatus}
      />
      {gameStatus === "won" && <WonBanner numOfGuesses={guesses.length} />}
      {gameStatus === "lost" && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
