import { combineReducers } from "redux";
import weatherReducer from "./weather";
import settingsReducer from "./settings";

const reducers = combineReducers({
  weather: weatherReducer,
  settings: settingsReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
