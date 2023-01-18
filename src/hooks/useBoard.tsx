import { useState, useEffect } from "react";
import { matrix } from "../Comonents/matrix";

export interface IuseBoard {
  board: {
    letter: string;
    classState: string;
  }[][];
  attempt: {
    rowAttempt: number;
    cellAttempt: number;
  };
  letterInInput: (letter: any) => void;
  handleKeyPress: (e: any) => void;
}

export function fillTheDictionary(word: string, dic: Map<string, number>) {
  const wordArray = word.split("");
  wordArray.forEach((letter) => {
    if (dic.get(letter)) {
      dic.set(letter, dic.get(letter)! + 1);
    } else {
      dic.set(letter, 1);
    }
  });
}

function isCorrect(userWord: string, word: string, row: number) {
  if (row === 3 && userWord !== word) {
    console.log("fail");
  } else if (userWord === word) {
    console.log("success");
  }
}

export function useBoard(): IuseBoard {
  const [board, setBoard] = useState(matrix);
  const [attempt] = useState({ rowAttempt: 0, cellAttempt: 0 });
  const word = "hello";
  const dic = new Map();
  fillTheDictionary(word, dic);
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  });

  function letterInInput(letter: string) {
    if (!letter) return;
    board[attempt.rowAttempt][attempt.cellAttempt].letter = letter;
    let userWord = "";
    // console.log(board[attempt.rowAttempt][attempt.cellAttempt]);
    // console.log(board);

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
      for (let ot = 0; ot < 5; ot++) {
        userWord += board[attempt.rowAttempt][ot].letter;
      }
      isCorrect(userWord, word, attempt.rowAttempt);
      attempt.rowAttempt++;
      attempt.cellAttempt = 0;
      console.log("done");
    } else {
      attempt.cellAttempt++;
    }
    setBoard([...board]);
  }

  function handleKeyPress(e: KeyboardEvent) {
    if ("qwertyuioplkjhgfdsazxcvbnm".includes(e.key)) {
      letterInInput(e.key);
    }
  }
  return { board, attempt, letterInInput, handleKeyPress };
}
