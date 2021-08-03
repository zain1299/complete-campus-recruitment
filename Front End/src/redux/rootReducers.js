import { combineReducers } from "redux";
import userReducer from "./Users/userReducers";
import signupReducer from "./Signup/signupReducer";

const rootReducer = combineReducers({
  user: userReducer,
  signup: signupReducer,
});

export default rootReducer;
