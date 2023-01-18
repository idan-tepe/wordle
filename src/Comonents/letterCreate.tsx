import { useContext } from "react";
import { AppContext } from "../contexts/appContext";
import { IuseBoard } from "../hooks/useBoard";

export function LetterCreate(props: { cell: number; row: number }) {
  const { board, attempt } = useContext(AppContext) as IuseBoard;

  const isCurrentAttemp = () => {
    if (
      attempt.cellAttempt === props.cell &&
      attempt.rowAttempt === props.row
    ) {
      return "focuss";
    }
    return " ";
  };

  const letter = board[props.row][props.cell].letter;

  return (
    <input
      value={letter}
      readOnly
      className={isCurrentAttemp() + board[props.row][props.cell].classState}
    />
  );
}
