import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Navigation from "./turnips/Navigation";
import Stalks from "./turnips/Stalks";
import { Main } from "./turnips/SharedStyle";

const Turnips = () => (
  <div className="container">
    <Router>
      <Main>
        <Switch>
          <Route exact path="/">
            <Stalks />
          </Route>
        </Switch>
        <Navigation />
      </Main>
    </Router>
  </div>
);

window.addEventListener("DOMContentLoaded", (event) => {
  ReactDOM.render(<Turnips />, document.getElementById("root"));
});
