export const createStore = (reducer, middlewares = []) => {
  let state;

  const listeners = [];

  const publish = () => {
    listeners.forEach(({ subscriber }) => {
      subscriber();
    });
  };

  const dispatch = action => {
    state = reducer(state, action);
    publish();
  };

  const subscribe = subscriber => {
    listeners.push({
      subscriber
    });
  };

  const getState = () => ({ ...state });

  const store = {
    dispatch,
    getState,
    subscribe
  };

  let lastDispatch = store.dispatch;

  middlewares = Array.from(middlewares).reverse();

  middlewares.forEach(middleware => {
    lastDispatch = middleware(store)(lastDispatch);
  });

  return {
    ...store,
    dispatch: lastDispatch
  };
};

export const actionCreator = (type, payload = {}) => ({
  type,
  payload: { ...payload }
});
