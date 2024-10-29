import "./PlayAgain.css";
import GameState from "./GameState";

function PlayAgain({ gameState, onPlayAgain }) {
    if(gameState === GameState.inProgress){
        return
    }
  return <button onClick={onPlayAgain} className="play-again">jogar novamente</button>;
}

export default PlayAgain;
