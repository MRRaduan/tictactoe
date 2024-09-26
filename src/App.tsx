import { useState } from "react";
import "./App.css";

const Square = ({ player, togglePlayer, id, updateBoard, board }) => {
  const onPlayerClick = () => {
    const newBoard = [...board];
    newBoard[id] = player;
    updateBoard(newBoard);
    togglePlayer(player === "o" ? "x" : "o");
  };
  return (
    <div
      className="square"
      onClick={onPlayerClick}
      style={{ fontSize: "72px" }}
    >
      {board[id]}
    </div>
  );
};

function App() {
  const [player, setPlayer] = useState("o");
  const [board, setBoard] = useState(Array(9));

  console.log(board);
  return (
    <main className="center">
      <div className="square-wrapper">
        {Array(9)
          .fill("_")
          .map((_, index) => (
            <Square
              id={index}
              player={player}
              togglePlayer={setPlayer}
              updateBoard={setBoard}
              board={board}
            ></Square>
          ))}
      </div>
    </main>
  );
}

export default App;
