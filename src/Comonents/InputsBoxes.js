import React from "react";
import { InputLetter } from "./inputLetter";

export function InputBoxes() {
  const lstRow = [0, 1, 2, 3];
  const lstLetters = [0, 1, 2, 3, 4];

  function CreateRow({ RowNum }) {
    return (
      <div className="row">
        {lstLetters.map((letter) => (
          <InputLetter
            type="text"
            row={RowNum}
            cell={letter}
            key={`row-${RowNum}-cell${letter}`}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="upper">
      {lstRow.map((row) => (
        <CreateRow RowNum={row} key={row} />
      ))}
    </div>
  );
}
