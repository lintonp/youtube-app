// import "./App.css";

import { Provider } from "react-redux";
import Body from "./Components/Body";
import Header from "./Components/Header";

import AppStore from "./Store/AppStore";

import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import VideoContainer from "./Components/VideoContainer";
import MainContent from "./Components/MainContent";

const router = createBrowserRouter([
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
        element: <VideoContainer />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <Provider store={AppStore}>
        <Header />
        <RouterProvider router={router}>
          <Outlet />
          {/* <Body /> */}
        </RouterProvider>
      </Provider>
      {/* *
      Head
      Body
        Menu
        Main container
          Buttons with suggestions
          Video Cards
      * */}
    </div>
  );
}

export default App;
