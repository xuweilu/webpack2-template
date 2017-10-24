import React, { Component } from "react";
import { Button, ButtonToolbar } from "react-bootstrap";

class Leaders extends Component {
  render() {
    return (
      <ButtonToolbar>
        <Button bsStyle="primary" bsSize="large" active>Primary button</Button>
        <Button bsSize="large" active>Button</Button>
      </ButtonToolbar>
    );
  }
}

export default Leaders;

