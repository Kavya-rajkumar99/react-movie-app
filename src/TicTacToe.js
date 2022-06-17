import { useState } from "react";
import { GameBox } from "./GameBox";
import Button from "@mui/material/Button";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
export function TicTacToe() {
  const { width, height } = useWindowSize();
  const [board, setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [isXTurn, setIsXTurn] = useState(true);
  const handleClick = (index) => {
    console.log(index);
    if (!board[index] && !winner) {
      const boardCopy = [...board];
      boardCopy[index] = isXTurn ? "X" : "O";
      setBoard(boardCopy);
      setIsXTurn(!isXTurn);
    }
  };
  let count = 0;
  const decideWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] !== null && board[a] === board[b] && board[b] === board[c]) {
        console.log("Winner", board[a]);
        return board[a];
      }
    }
    return null;
  };
  board.forEach((val) => {
    if (val != null) {
      count++;
    }
  });
  const winner = decideWinner(board);
  const restart = () => {
    setBoard([null, null, null, null, null, null, null, null, null]);
    setIsXTurn(true);
  };
  return (
    <div className="game">
      {!winner && count !== 9 ? (
        isXTurn ? (
          <h3>X's turn</h3>
        ) : (
          <h3>O's turn</h3>
        )
      ) : (
        ""
      )}
      {winner ? <Confetti width={width} height={height} gravity={0.05} /> : ""}
      <div className="game-board">
        {board.map((val, index) => (
          <GameBox
            key={index}
            index={index}
            val={val}
            onPlayerClick={() => handleClick(index)}
          />
        ))}
      </div>
      <Button variant="outlined" onClick={() => restart()}>
        Restart
      </Button>
      {winner ? (
        <h1 className="game-over">Game Over!!! Winner is {winner}</h1>
      ) : count === 9 ? (
        <h1 className="game-over">Game Over!!! It's a draw</h1>
      ) : (
        ""
      )}
    </div>
  );
}
