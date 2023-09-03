// import "./App.css";

import { Provider } from "react-redux";
import Header from "./Components/Header";

import AppStore from "./Store/AppStore";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Provider store={AppStore}>
        <Header />
        {/* <RouterProvider router={router}> */}
        <Outlet />
        {/* <Body /> */}
        {/* </RouterProvider> */}
      </Provider>
    </div>
  );
}

export default App;
