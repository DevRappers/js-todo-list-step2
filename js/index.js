import UserInput from "./components/UserInput.js";
import { store } from "./store/store.js";

UserInput();

store.subscribe(() => {
  console.log(store.getState());
});
