import { useEffect, useState } from "react";
import { GameBox } from "./GameBox";
import Button from "@mui/material/Button";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
export function TicTacToe() {
  const { width, height } = useWindowSize();
  const [winner, setWinner] = useState(null);
  const[tie,setTie] = useState(false)
  // const[winningLine,setWinningLine] = useState([null,null,null])
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
  // let count = 0;
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
        setWinner(board[a]);
        // setWinningLine([a,b,c])
        // console.log("Winner", board[a]);
        // return board[a];
      }
    }
  };
  const checkTie=(board)=>{
    let count=0;
    board.forEach((val)=>{
      if(val!==null){
        count++;
      }
    });
    if(count===9){
     setTie(true)
    }
  }
  // board.forEach((val) => {
  //   if (val != null) {
  //     count++;
  //   }
  // });

  useEffect(() => {
    console.log(board);
    decideWinner(board);
    checkTie(board);
  }, [board]);

  const restart = () => {
    setBoard([null, null, null, null, null, null, null, null, null]);
    setIsXTurn(true);
    setWinner(null);
    setTie(false);
    // setWinningLine([null,null,null])
  };
  return (
    <div className="game">
      {!winner && !tie ? (
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
            // winningLine={winningLine}
            onPlayerClick={() => handleClick(index)}
          />
        ))}
      </div>
      <Button variant="outlined" onClick={() => restart()}>
        Restart
      </Button>
      {winner ? (
        <h1 className="game-over">Game Over!!! Winner is {winner}</h1>
      ) : tie ? (
        <h1 className="game-over">Game Over!!! It's a draw</h1>
      ) : (
        ""
      )}
    </div>
  );
}
