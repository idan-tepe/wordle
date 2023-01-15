import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { NavBarContext } from "../contexts/navBarContext";
import { InfoPopUp } from "./infoPage";

export default function NavBar() {
  const { handleShow, user, setUser } = useContext(NavBarContext);

  useEffect(() => {
    //console.log(data, "effect");
    const isUser = JSON.parse(localStorage.getItem("dataKey"));

    if (isUser && user === "guest") {
      setUser(isUser.userName);
      //setData(isUser);
    }
  }, [user, setUser]);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          WORDLE
        </Link>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link active" to="/game">
              game
            </Link>
            {user === "guest" ? (
              <Link className="nav-item nav-link active" to="/sign-in">
                sign in
              </Link>
            ) : (
              <span
                className="nav-item nav-link active"
                onClick={() => {
                  setUser("guest");
                  localStorage.removeItem("dataKey");
                }}
              >
                {user} log out
              </span>
            )}
            <Link className="nav-item nav-link active" onClick={handleShow}>
              info
            </Link>
            <InfoPopUp />
          </div>
        </div>
      </nav>
    </>
  );
}
