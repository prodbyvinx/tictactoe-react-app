import "./Result.css";
import GameState from "./GameState";

function Result({ gameState }) {
  console.log(gameState);
  switch (gameState) {
    case GameState.inProgress:
      return <></>;
    case GameState.playerXWins:
      return <div className="result">X venceu o jogo!</div>;
    case GameState.playerOWins:
      return <div className="result">O venceu o jogo!</div>;
    case GameState.draw:
      return <div className="result">Empate!</div>;
    default:
      return <></>;
  }
}

export default Result;
