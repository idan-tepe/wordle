import "./App.scss";
import NavBar from "./Comonents/navBar";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { NavBarContext } from "./contexts/navBarContext";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState("guest");
  const handleShow = () => setShow(true);

  return (
    <>
      <NavBarContext.Provider
        value={{ setShow, handleShow, show, user, setUser }}
      >
        <NavBar />
        <div className="container">
          <Outlet />
        </div>
      </NavBarContext.Provider>
    </>
  );
}

export default App;
