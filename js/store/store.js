import rootReducer from "../reducers/index.js";
import { createStore } from "../lib/redux.js";
import { loggerMiddleware } from "../lib/utils.js";

export const store = createStore(rootReducer, [loggerMiddleware]);
