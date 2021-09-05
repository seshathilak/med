import { combineReducers } from "redux";
import AuthReducer from "./reducers/authReducer";
import AppReducer from "./reducers/appReducer";

const rootReducer = combineReducers({
  Auth: AuthReducer,
  App: AppReducer,
});

export default rootReducer;