import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Button, ButtonToolbar } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <ButtonToolbar>
        <Button bsStyle="primary" bsSize="large" active>Primary button</Button>
        <Button bsSize="large" active>Button</Button>
      </ButtonToolbar>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById("root"),
);
