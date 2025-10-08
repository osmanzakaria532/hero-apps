import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Apps from "../pages/Apps/Apps";
import Home from "../pages/Home/Home";
import Installation from "../pages/Installation/Installation";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/apps",
        Component: Apps,
      },
      {
        path: "/installation",
        Component: Installation,
      },
    ],
  },
]);
