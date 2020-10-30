import rootReducer from "../reducers/index.js";
import { createStore } from "../lib/redux.js";
import { logger, thunk } from "../lib/middlewares.js";

export const store = createStore(rootReducer, [logger, thunk]);
