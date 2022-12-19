import { useContext } from "react";
import { AppContext } from "../contexts/appContext";

export function InputLetter(props) {
  const { board, attempt } = useContext(AppContext);

  const isCurrentAttemp = () => {
    return (
      attempt.cellAttempt === props.cell && attempt.rowAttempt === props.row
    );
  };

  const letter = board[props.row][props.cell];
  return (
    <input
      value={letter}
      readOnly
      className={isCurrentAttemp() ? "focuss" : ""}
    />
  );
}
