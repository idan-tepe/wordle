import "./App.scss";
import { NavBar } from "./Comonents/Title";
import { InputBoxes } from "./Comonents/InputsBoxes";
import { Keyboard } from "./Comonents/Keyboard";
import { matrix } from "./Comonents/matrix";
import { AppContext } from "./contexts/appContext";
import { useEffect, useState } from "react";

function App() {
  const [board, setBoard] = useState(matrix);
  const [attempt, setAttempt] = useState({ rowAttempt: 0, cellAttempt: 0 });

  useEffect(() => {
    document.getElementsByClassName("row")[0].firstChild.focus();
  }, []);

  function letterInInput(letter) {
    board[attempt.rowAttempt][attempt.cellAttempt] = letter;
    console.log(board);
    attempt.cellAttempt++;
    setBoard([...board]);
    if (attempt.cellAttempt > 4) {
      const newAttempt = {
        ...attempt,
        rowAttempt: attempt.rowAttempt + 1,
        cellAttempt: 0,
      };
      setAttempt(newAttempt);
      console.log("done");

      // setTimeout(() => alert("done"), 0);
      // alert("djaknd");
    }
  }

  function handleKeyPress(e) {
    if ("qwertyuioplkjhgfdsazxcvbnm".includes(e.key)) {
      letterInInput(e.key);
    }
  }

  return (
    <div className="container">
      <NavBar />
      <AppContext.Provider value={{ board, setBoard, attempt, setAttempt }}>
        <div id="gameBoard" onKeyUp={(e) => handleKeyPress(e)}>
          <InputBoxes id="InputBoxes" />
          <Keyboard letterInInput={letterInInput} />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
