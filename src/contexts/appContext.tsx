import { createContext } from "react";
import { IuseBoard } from "../hooks/useBoard";
export const AppContext = createContext<IuseBoard | null>(null);
