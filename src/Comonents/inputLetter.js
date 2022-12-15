import { useContext } from "react";
import { AppContext } from "../contexts/appContext";

export function InputLetter(props) {
  const { board } = useContext(AppContext);
  const letter = board[props.row][props.cell];
  return <input value={letter} readOnly />;
}
