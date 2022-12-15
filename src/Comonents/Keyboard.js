import React, { useContext } from "react";
import { AppContext } from "../contexts/appContext";

export function Keyboard() {
  const r1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  const r2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  const r3 = ["z", "x", "c", "v", "b", "n", "m"];

  const { board, setBoard, attempt, setAttempt } = useContext(AppContext);

  function handleButtonClick(e) {
    console.log(e.target.innerText);
    board[attempt.rowAttempt][attempt.cellAttempt] = e.target.innerText;
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

      setTimeout(() => alert("done"), 1);
    }
  }

  function createButtomsRow(r) {
    return r.map((letter) => (
      <button onClick={(e) => handleButtonClick(e)}>{letter}</button>
    ));
  }
  return (
    <div className="keyboard">
      <div className="krow">{createButtomsRow(r1)}</div>
      <div className="krow">{createButtomsRow(r2)}</div>
      <div className="krow">
        <button>enter</button>
        {createButtomsRow(r3)}
        <button>&#9003;</button>
      </div>
    </div>
  );
}
