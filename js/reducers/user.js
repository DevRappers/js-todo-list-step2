import { fetchUserList } from "../lib/api.js";
import { actionCreator } from "../lib/redux.js";

const USER_INIT = "USER_INIT";

export const initUser = () => dispatch =>
  fetchUserList()
    .then(response => {
      dispatch(actionCreator(USER_INIT, { users: response }));
    })
    .catch(error => console.error(error));

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
