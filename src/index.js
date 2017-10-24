import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Leaders from "./components/Leaders";

render(
  (
    <Provider store={store}>
      <Router>
        <div id="root">
          <h1>App</h1>
          <Route path="/" component={Leaders}/>
        </div>
      </Router>
    </Provider>
  ), document.getElementById("app"),
);
