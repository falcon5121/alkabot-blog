import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./Pages/PubliPage/PubliPage";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  useParams,
} from "react-router-dom";
import Post from "./Pages/Post/Post";
import { getOnePubly, getPublies } from "./HttpRequests/getPublies";
import getComments from "./HttpRequests/getComments";
import getUsers from "./HttpRequests/getUsers";
import LazyPostComponent from "./components/lazyPostComponent/lazyPostComponent";
import LazyLoadingPubliPage from "./components/lazyLoadingPubliPage/lazyLoadingPubliPage";
import LazyPostsPage from "./components/LazyPostsPage/LazyPostsPage";
const Home = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return import("./Pages/PubliPage/PubliPage");
});
const Posts = lazy(async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return import("./Pages/Post/Post");
});
// const urlId = useParams();

export const HTTP_URL = "https://jsonplaceholder.typicode.com";

const routes = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "",
        loader: () => {
          return getUsers();
        },
        element: (
          <Suspense fallback={<LazyLoadingPubliPage />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "posts/:id",
        loader: () => {
          return getOnePubly("1");
        },
        element: (
          <Suspense fallback={<LazyPostsPage />}>
            <Posts />
          </Suspense>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
