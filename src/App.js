import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import store from "./store";
import Routes from "./Routes";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
