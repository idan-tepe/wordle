import "./App.scss";
import { Title } from "./Comonents/Title";
import { InputBoxes } from "./Comonents/InputsBoxes";
import { Keyboard } from "./Comonents/Keyboard";
import { matrix } from "./Comonents/matrix";
import { useState } from "react";
import { AppContext } from "./contexts/appContext";

function App() {
  const [board, setBoard] = useState(matrix);
  const [attempt, setAttempt] = useState({ rowAttempt: 0, cellAttempt: 0 });

  // useEffect(() => {
  //   board[attempt.rowAttempt][attempt.cellAttempt].focus();
  // }, [board]);

  const appName = `WORDLE!!!`;
  return (
    <div className="container">
      <Title appName={appName} />
      <AppContext.Provider value={{ board, setBoard, attempt, setAttempt }}>
        <InputBoxes />
        <Keyboard />
      </AppContext.Provider>
    </div>
  );
}

export default App;
