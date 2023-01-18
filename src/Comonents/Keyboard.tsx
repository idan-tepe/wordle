import React, { useContext } from "react";
import { AppContext } from "../contexts/appContext";
import { matrix } from "./matrix";
import { IuseBoard } from "../hooks/useBoard";

export function Keyboard() {
  const keysDict = new Map();
  "abcdefghijklmnopqrstuvwxyz".split("").forEach((letter) => {
    keysDict.set(letter, "");
  });

  const r1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
  const r2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  const r3 = ["z", "x", "c", "v", "b", "n", "m"];
  const { letterInInput } = useContext(AppContext) as IuseBoard;

  //I tried to put React.MouseEvent<HTMLButtonElement> as type of e but there is a problem with the innerText that isnt rcognized
  // @ts-ignore:
  function handleButtonClick(e) {
    console.log(e.target.innerText);
    letterInInput(e.target.innerText);
  }

  function colorOfButton(currentLetter: string) {
    let color = "";
    matrix.forEach((row) =>
      row.forEach((cell) => {
        if (cell.letter === currentLetter) {
          if (cell.classState === "greenBG") {
            color = "green";
            keysDict.set(currentLetter, "green");
          } else if (
            cell.classState === "yellowBG" &&
            (keysDict.get(currentLetter) === "" ||
              keysDict.get(currentLetter) === "gray")
          ) {
            color = "yellow";
            keysDict.set(currentLetter, "yellow");
          } else if (
            cell.classState === "grayBG" &&
            keysDict.get(currentLetter) === ""
          ) {
            color = "gray";
            keysDict.set(currentLetter, "gray");
          }
        }
      })
    );
    return color;
  }

  function createButtomsRow(r: string[]) {
    return r.map((letter: string) => (
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
