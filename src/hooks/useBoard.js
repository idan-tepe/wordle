import { useState, useEffect } from "react";
import { matrix } from "../Comonents/matrix";
export function useBoard() {
  const [board, setBoard] = useState(matrix);
  const [attempt, setAttempt] = useState({ rowAttempt: 0, cellAttempt: 0 });
  const word = "abcde";
  useEffect(() => {
    //focus on the first input
    // document.querySelectorAll("row")[0].firstChild.focus();
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  function letterInInput(letter) {
    if (!letter) return;
    board[attempt.rowAttempt][attempt.cellAttempt].letter = letter;
    console.log(board[attempt.rowAttempt][attempt.cellAttempt]);
    console.log(board);

    if (attempt.cellAttempt >= 4) {
      // for (let i = 0; i < 5; i++) {
      //   if (word.includes(board[attempt.rowAttempt][i].letter)) {
      //     if (board[attempt.rowAttempt][i].letter === word[i]) {
      //       console.log("green");
      //     } else {
      //       console.log("yellow");
      //     }
      //   }
      //   console.log("gray");
      // }
      // const newAttempt = {
      //   ...attempt,
      //   rowAttempt: attempt.rowAttempt + 1,
      //   cellAttempt: 0,

      // setAttempt(newAttempt);
      attempt.rowAttempt++;
      attempt.cellAttempt = 0;
      console.log("done");
    } else {
      attempt.cellAttempt++;
    }
    setBoard([...board]);
  }

  function handleKeyPress(e) {
    if ("qwertyuioplkjhgfdsazxcvbnm".includes(e.key)) {
      letterInInput(e.key);
    }
  }
  return { board, attempt, letterInInput, handleKeyPress };
}
