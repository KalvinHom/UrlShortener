import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home.js";
import ShortURLRedirect from "./components/ShortURLRedirect";
import FlashProvider from "./providers/FlashProvider";
import FlashMessage from "./components/FlashMessage";
function App() {
  return (
    <div>
      <FlashProvider>
        <FlashMessage />
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
      </FlashProvider>
    </div>
  );
}

export default App;
