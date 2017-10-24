import update from "immutability-helper";
import constants from "../constants";

const leaders = (state = [], action) => {
  switch (action.type) {
    case constants.RECEIVE_LEADERS:
      if (action.success) {
        return update(state, { $set: action.data });
      }
      return state;
    default:
      return state;
  }
};

export default leaders;
