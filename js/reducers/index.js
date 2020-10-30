import todos from "./todos.js";
import user from "./user.js";
import { combineReducers } from "../lib/redux.js";

const rootReducer = combineReducers({
  todos,
  user
});

export default rootReducer;
