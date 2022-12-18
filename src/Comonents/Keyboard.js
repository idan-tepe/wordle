import React /*, { useContext }*/ from "react";
// import { AppContext } from "../contexts/appContext";

export function Keyboard({ letterInInput }) {
  const r1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  const r2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  const r3 = ["z", "x", "c", "v", "b", "n", "m"];

  // const { board, setBoard, attempt, setAttempt } = useContext(AppContext);

  function handleButtonClick(e) {
    console.log(e.target.innerText);
    letterInInput(e.target.innerText);
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
        {createButtomsRow(r3)}
        <button>&#9003;</button>
      </div>
    </div>
  );
}
