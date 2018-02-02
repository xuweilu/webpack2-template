import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Button, ButtonToolbar } from "react-bootstrap";

import "./scss/main.scss";

class App extends Component {
  render() {
    return (
      <div>
        Index
      </div>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById("root"),
);
