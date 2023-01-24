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

export function useBoard(): IuseBoard {
  const [board, setBoard] = useState(matrix);
  const [attempt] = useState({ rowAttempt: 0, cellAttempt: 0 });
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  });

  async function letterInInput(letter: string) {
    if (!letter) return;
    board[attempt.rowAttempt][attempt.cellAttempt].letter = letter;
    let userWord = "";

    if (attempt.cellAttempt >= 4) {
      for (let ot = 0; ot < 5; ot++) {
        userWord += board[attempt.rowAttempt][ot].letter;
      }
      const req = await fetch("http://localhost:3007/word/check", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify({ userWord: userWord }),
      });

      const res = await req.json();
      for (let i = 0; i < 5; i++) {
        board[attempt.rowAttempt][i].classState = res.stateArray[i];
      }
      if (res.isEqual) {
        console.log("success");
      } else if (attempt.rowAttempt === 3 && res.isEqual === false) {
        console.log("fail");
      }
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
