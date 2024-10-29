import "./Game.css";
import Board from "./Board";
import { useState, useEffect } from "react";
import Result from "./Result";
import GameState from "./GameState";
import PlayAgain from "./PlayAgain";

const PLAYER_X = "x";
const PLAYER_O = "o";

const winningCombinations = [
  //linhas
  { combination: [0, 1, 2] },
  { combination: [3, 4, 5] },
  { combination: [6, 7, 8] },

  //colunas
  { combination: [0, 3, 6] },
  { combination: [1, 4, 7] },
  { combination: [2, 5, 8] },

  //diagonais
  { combination: [0, 4, 8] },
  { combination: [2, 4, 6] },
];

function checkWinner(tiles, setGameState) {
  for (const { combination } of winningCombinations) {
    const tileValue1 = tiles[combination[0]];
    const tileValue2 = tiles[combination[1]];
    const tileValue3 = tiles[combination[2]];

    if (
      tileValue1 !== null &&
      tileValue1 === tileValue2 &&
      tileValue1 === tileValue3
    ) {
      if (tileValue1 === PLAYER_X) {
        setGameState(GameState.playerXWins);
      } else {
        setGameState(GameState.playerOWins);
      }
      return;
    }
  }

  const areAllTilesFilledIn = tiles.every((tile) => tile !== null);
  if (areAllTilesFilledIn) {
    setGameState(GameState.draw);
  }
}

function Game() {
  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(PLAYER_X);
  const [gameState, setGameState] = useState(GameState.inProgress);

  const handleTileClick = (index) => {
    if(gameState !== GameState.inProgress) {
        return;
    }
    
    if (tiles[index] !== null) {
      return;
    }

    const newTiles = [...tiles];
    newTiles[index] = playerTurn;
    setTiles(newTiles);

    // if (playerTurn === PLAYER_X) {
    //   setPlayerTurn(PLAYER_O);
    // } else {
    //   setPlayerTurn(PLAYER_X);
    // }
    setPlayerTurn(playerTurn === PLAYER_X ? PLAYER_O : PLAYER_X);
    return;
  };

  const handlePlayAgain = () => {
    setGameState(GameState.inProgress);
    setTiles(Array(9).fill(null));
    setPlayerTurn(PLAYER_X);
  };

  useEffect(() => {
    checkWinner(tiles, setGameState);
  }, [tiles]);

  return (
    <div className="game">
      <section>
        <h1 className="title"> Tic Tac Toe </h1>
        <p className="subtitle">
          Jogo da velha em React criado para fins educacionais
        </p>
      </section>

      <Board tiles={tiles} onTileClick={handleTileClick} />
      <Result gameState={gameState} playerTurn={playerTurn} />
      <PlayAgain gameState={gameState} onPlayAgain={handlePlayAgain} />
    </div>
  );
}

export default Game;
