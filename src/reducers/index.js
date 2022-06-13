import counterReducer from "./counter";
import loggedInReducer from "./isLoggedIn";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counts: counterReducer,
  isLoggedIn: loggedInReducer,
});

export default allReducers;
