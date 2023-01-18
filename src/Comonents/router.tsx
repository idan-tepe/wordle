import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { WelcomePage } from "./welcome";
import { Game } from "./game";
import { SignInPage } from "./signInPage";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        element: <WelcomePage />,
        path: "/",
      },
      {
        element: <Game />,
        path: "/game",
      },
      {
        element: <SignInPage />,
        path: "/sign-in",
      },
    ],
  },
]);
