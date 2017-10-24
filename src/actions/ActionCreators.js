import constants from "../constants";
import API from "../api/API";

const ActionCreators = {
  fetchLeaders() {
    return (dispatch) => {
      dispatch({ type: constants.REQUEST_LEADERS });
      API.fetchLeadersAsync().then(
        (data) => {
          dispatch({ type: constants.RECEIVE_LEADERS, success: true, data });
        },
        error => dispatch({ type: constants.RECEIVE_LEADERS, success: false, error }),
      );
    };
  },
};

export default ActionCreators;
