import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home.js";
import ShortURLRedirect from "./components/ShortURLRedirect";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/:slug">
          <ShortURLRedirect />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
