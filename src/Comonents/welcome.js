import { useContext } from "react";

import { NavBarContext } from "../contexts/navBarContext";

export function WelcomePage() {
  const { user } = useContext(NavBarContext);
  console.log();
  return <h1>Welcome {user}!</h1>;
}
