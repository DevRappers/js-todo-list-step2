import { actionCreator } from "../lib/redux.js";

const USER_INIT = "USER_INIT";

export const initUser = todos => actionCreator(USER_INIT, { todos });

const initialState = {
  users: [],
  selectedIndex: 0
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_INIT: {
      return {
        ...state,
        users: payload.users
      };
    }
    default:
      return {
        ...state
      };
  }
};

export default userReducer;
