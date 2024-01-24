import { createBrowserRouter } from "react-router-dom";
import * as lazy from "./lazyLoadFiles";

export const RouteObject = createBrowserRouter([
  {
    path: "*",
    element: "page does not exist...",
  },
  {
    path: "/",
    element: <lazy.LazyMainLayout />,
    children: [
      {
        path: "/",
        element: <lazy.LazyAddCharts />,
      },
      {
        path: "form-validation",
        element: <lazy.LazyForm />,
      },
      {
        path: "products",
        element: <lazy.LazyProductPage />,
      },
      {
        path: "addusers",
        element: <lazy.LazyAddUsers />,
      },
      {
        path: "scroll",
        element: <lazy.LazyScroll />,
      },
    ],
  },
]);
