import { BoardCreate } from "./boardCreate";
import { Keyboard } from "./Keyboard";

import { AppContext } from "../contexts/appContext";

import { useBoard } from "../hooks/useBoard";

export function Game() {
  const boardApi = useBoard();
  return (
    <AppContext.Provider value={boardApi}>
      <div>
        <BoardCreate />
        <Keyboard />
      </div>
    </AppContext.Provider>
  );
}
