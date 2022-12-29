import { InputBoxes } from "./InputsBoxes";
import { Keyboard } from "./Keyboard";

import { AppContext } from "../contexts/appContext";

import { useBoard } from "../hooks/useBoard";

export function Game() {
  const boardApi = useBoard();
  return (
    <AppContext.Provider value={boardApi}>
      <div onKeyUp={(e) => boardApi.handleKeyPress(e)}>
        <InputBoxes />
        <Keyboard />
      </div>
    </AppContext.Provider>
  );
}
