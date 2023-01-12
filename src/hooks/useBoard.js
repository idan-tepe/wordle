import { useState, useEffect } from "react";
import { matrix } from "../Comonents/matrix";

export function useBoard() {
  const [board, setBoard] = useState(matrix);
  const [attempt] = useState({ rowAttempt: 0, cellAttempt: 0 });
  const word = "event";
  const dic = new Map();
  const wordArray = word.split("");
  wordArray.forEach((letter) => {
    if (dic.get(letter)) {
      dic.set(letter, dic.get(letter) + 1);
    } else {
      dic.set(letter, 1);
    }
  });
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  });

  function letterInInput(letter) {
    if (!letter) return;
    board[attempt.rowAttempt][attempt.cellAttempt].letter = letter;
    console.log(board[attempt.rowAttempt][attempt.cellAttempt]);
    console.log(board);

    if (attempt.cellAttempt >= 4) {
      for (let i = 0; i < 5; i++) {
        if (board[attempt.rowAttempt][i].letter === word[i]) {
          dic.set(
            board[attempt.rowAttempt][i].letter,
            dic.get(board[attempt.rowAttempt][i].letter) - 1
          );
          board[attempt.rowAttempt][i].classState = "greenBG";
        }
      }
      for (let i = 0; i < 5; i++) {
        if (word.includes(board[attempt.rowAttempt][i].letter)) {
          if (
            dic.get(board[attempt.rowAttempt][i].letter) > 0 &&
            board[attempt.rowAttempt][i].classState === ""
          ) {
            dic.set(
              board[attempt.rowAttempt][i].letter,
              dic.get(board[attempt.rowAttempt][i].letter) - 1
            );
            board[attempt.rowAttempt][i].classState = "yellowBG";
          } else if (board[attempt.rowAttempt][i].classState === "") {
            board[attempt.rowAttempt][i].classState = "grayBG";
          }
        } else {
          board[attempt.rowAttempt][i].classState = "grayBG";
        }
      }

      // for (let i = 0; i < 5; i++) {
      //   if (word.includes(board[attempt.rowAttempt][i].letter)) {
      //     if (board[attempt.rowAttempt][i].letter === word[i]) {
      //       board[attempt.rowAttempt][i].classState = "greenBG";
      //     } else {
      //       board[attempt.rowAttempt][i].classState = "yellowBG";
      //     }
      //   } else {
      //     board[attempt.rowAttempt][i].classState = "grayBG";
      //   }
      //   console.log(board[attempt.rowAttempt][i].classState);
      // }

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
