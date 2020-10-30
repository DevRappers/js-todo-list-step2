import todoReducer from "../reducers/todos.js";
import { createStore } from "../lib/redux.js";
import { loggerMiddleware } from "../lib/utils.js";

export const store = createStore(todoReducer, [loggerMiddleware]);
