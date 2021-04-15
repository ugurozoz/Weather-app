import { combineReducers } from 'redux';
import weatherReducer from './weather';
import settingsReducer from './settings';
import locationReducer from './location';


const reducers = combineReducers({
  weather: weatherReducer,
  settings: settingsReducer,
  location: locationReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
