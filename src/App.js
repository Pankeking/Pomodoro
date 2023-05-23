import { Provider } from "react-redux";
import store from "./redux/store.js";

function App() {
  return (
    <Provider store={store}>
      <h1>Pomodoro Timer</h1>
    </Provider>
  );
}

export default App;
