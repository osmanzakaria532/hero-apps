import { Suspense } from "react";
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
        Component: () => (
          <Suspense fallback={<p>Loading Home...</p>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/apps",
        loader: () => fetch("/appsData.json"),
        Component: () => (
          <Suspense fallback={<p>Loading Apps...</p>}>
            <Apps />
          </Suspense>
        ),
      },
      {
        path: "/apps/appDetails/:id",
        loader: ({ params }) => fetch("/appsData.json"),
        Component: () => (
          <Suspense fallback={<p>Loading Details...</p>}>
            <AppDetails />
          </Suspense>
        ),
      },
      {
        path: "/installation",
        Component: Installation,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
