import { combineReducers } from "redux";
import userReducer from "./userReducer";
import gameReducer from "./gameReducer";
import threadReducer from "./threadReducer";


const rootReducer = combineReducers({
  user: userReducer,
  game: gameReducer,
  thread: threadReducer
});

export default rootReducer;
