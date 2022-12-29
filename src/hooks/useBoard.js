import { useState, useEffect } from "react";
import { matrix } from "../Comonents/matrix";
export function useBoard() {
  const [board, setBoard] = useState(matrix);
  const [attempt, setAttempt] = useState({ rowAttempt: 0, cellAttempt: 0 });

  useEffect(() => {
    document.getElementsByClassName("row")[0].firstChild.focus();
  }, []);

  function letterInInput(letter) {
    board[attempt.rowAttempt][attempt.cellAttempt] = letter;
    console.log(board);
    attempt.cellAttempt++;
    setBoard([...board]);
    if (attempt.cellAttempt > 4) {
      const newAttempt = {
        ...attempt,
        rowAttempt: attempt.rowAttempt + 1,
        cellAttempt: 0,
      };
      setAttempt(newAttempt);
      console.log("done");
    }
  }

  function handleKeyPress(e) {
    if ("qwertyuioplkjhgfdsazxcvbnm".includes(e.key)) {
      letterInInput(e.key);
    }
  }
  return { board, attempt, letterInInput, handleKeyPress };
}
