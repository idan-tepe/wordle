import React from "react";
import { LetterCreate } from "./letterCreate";

export function BoardCreate() {
  const lstRow = [0, 1, 2, 3];
  const lstLetters = [0, 1, 2, 3, 4];

  function CreateRow({ RowNum }: { RowNum: number }) {
    return (
      <div className="row">
        {lstLetters.map((letter) => (
          <LetterCreate
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
