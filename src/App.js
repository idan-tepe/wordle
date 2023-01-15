import "./App.scss";
import NavBar from "./Comonents/navBar";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { NavBarContext } from "./contexts/navBarContext";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState("guest");
  const [data, setData] = useState([]);

  const handleShow = () => setShow(true);
  // useEffect(() => {
  //   console.log(data, "effect");
  //   const isUser = localStorage.getItem("dataKey");
  //   if (isUser && user === "guest") {
  //     setUser(isUser.name);
  //     setData(isUser);
  //     return;
  //   }
  // }, [user]);
  return (
    <>
      <NavBarContext.Provider
        value={{
          setShow,
          handleShow,
          show,
          user,
          setUser,
          data,
          setData,
        }}
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
