import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import Main from "./components/Main.js"



function App() {
  return (
    <Provider store={store}>
        <Main />
    </Provider>
  );
}

export default App;
