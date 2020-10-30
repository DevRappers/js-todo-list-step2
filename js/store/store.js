import rootReducer from "../reducers/index.js";
import { createStore } from "../lib/redux.js";
import { thunk } from "../lib/middlewares.js";

export const store = createStore(rootReducer, [thunk]);
