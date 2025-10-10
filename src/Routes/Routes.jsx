import { createBrowserRouter } from "react-router";

import RootLayout from "../RootLayout/RootLayout";
import AppDetails from "../pages/AppDetails/AppDetails";
import Apps from "../pages/Apps/Apps";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Installation from "../pages/Installation/Installation";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        loader: () => fetch("/appsData.json"),
        Component: Home,
      },
      {
        path: "/apps",
        loader: () => fetch("/appsData.json"),
        Component: Apps,
      },
      {
        path: "/apps/appDetails/:id",
        loader: ({ params }) => fetch("/appsData.json"),
        Component: AppDetails,
      },
      {
        path: "/installation",
        Component: Installation,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
