import { useContext } from "react";
import { INavBar } from "../App";

import { NavBarContext } from "../contexts/navBarContext";

export function WelcomePage() {
  const { user } = useContext(NavBarContext) as INavBar;
  return (
    <div>
      <h1> Welcome {user}!</h1>
    </div>
  );
}
