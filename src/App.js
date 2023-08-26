// import "./App.css";

import { Provider } from "react-redux";
import Body from "./Components/Body";
import Header from "./Components/Header";

import AppStore from "./Store/AppStore";

function App() {
  return (
    <div>
      <Provider store={AppStore}>
        <Header />
        <Body />
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
