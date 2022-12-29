import { Link } from "react-router-dom";
import { useContext } from "react";
import { NavBarContext } from "../contexts/navBarContext";
import { InfoPopUp } from "./infoPage";

export default function NavBar() {
  const { handleShow } = useContext(NavBarContext);
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
            <Link className="nav-item nav-link active" to="/sign-in">
              sign in
            </Link>
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
