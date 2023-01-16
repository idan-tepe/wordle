import React, { useContext } from "react";
import { AppContext } from "../contexts/appContext";
import { matrix } from "./matrix";
export function Keyboard() {
  const r1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  const r2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  const r3 = ["z", "x", "c", "v", "b", "n", "m"];
  const { letterInInput } = useContext(AppContext);

  function handleButtonClick(e) {
    console.log(e.target.innerText);
    letterInInput(e.target.innerText);
  }

  function colorOfButton(currentLetter) {
    let color = "";
    matrix.forEach((row) =>
      row.forEach((cell) => {
        if (cell.letter === currentLetter) {
          if (cell.classState === "greenBG") {
            color = "green";
          } else if (cell.classState === "yellowBG") {
            color = "yellow";
          } else if (cell.classState === "grayBG") {
            color = "gray";
          }
        }
      })
    );
    return color;
  }

  function createButtomsRow(r) {
    return r.map((letter) => (
      <button
        onClick={(e) => handleButtonClick(e)}
        className=""
        key={letter}
        style={{ backgroundColor: colorOfButton(letter) }}
      >
        {letter}
      </button>
    ));
  }
  return (
    <div className="keyboard">
      <div className="krow">{createButtomsRow(r1)}</div>
      <div className="krow">{createButtomsRow(r2)}</div>
      <div className="krow">
        {createButtomsRow(r3)}
        {/* <button>&#9003;</button> */}
      </div>
    </div>
  );
}
