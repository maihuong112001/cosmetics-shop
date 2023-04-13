import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./store";
import { RoutesConfig } from "./routes";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <RoutesConfig />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
