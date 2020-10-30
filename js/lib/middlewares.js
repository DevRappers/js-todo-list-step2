export const logger = store => next => action => {
  console.log("logger: ", action.type);
  next(action);
};

export const thunk = store => next => action =>
  typeof action === "function"
    ? action(store.dispatch, store.getState)
    : next(action);
