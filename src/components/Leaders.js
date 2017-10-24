import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Button, ButtonToolbar } from "react-bootstrap";
import ActionCreators from "../actions/ActionCreators";

class Leaders extends Component {
  componentDidMount() {
    this.props.fetchLeaders();
  }

  render() {
    return (
      <div>
        <ButtonToolbar>
          <Button bsStyle="primary" bsSize="large" active>Primary button</Button>
          <Button bsSize="large" active>Button</Button>
        </ButtonToolbar>
        {Array.from(this.props.leaders, (item, index) => (<div key={index}>{item.Symbol}</div>))}
      </div>
    );
  }
}
Leaders.propTypes = {
  leaders: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchLeaders: PropTypes.func.isRequired,
};

const mapStateToProps = state => (
  {
    leaders: state.leaders,
  }
);

const mapDispatchToProps = dispatch => (
  {
    fetchLeaders: () => dispatch(ActionCreators.fetchLeaders()),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Leaders);

