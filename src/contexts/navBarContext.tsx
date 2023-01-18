import { createContext } from "react";
import { INavBar } from "../App";
export const NavBarContext = createContext<INavBar | null>(null);
