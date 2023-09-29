import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import reportWebVitals from './reportWebVitals';

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContent from "./Components/MainContent";
import Body from "./Components/Body";
import VideoContainerShimmer from "./Components/ShimmerUI/VideoContainerShimmer";

const VideoContainer = lazy(() => import("./Components/VideoContainer"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
        children: [
          {
            path: "/",
            element: <MainContent />,
          },
          {
            path: "/watch",
            element: (
              <Suspense fallback={<VideoContainerShimmer />}>
                <VideoContainer />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
