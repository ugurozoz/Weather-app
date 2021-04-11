import { combineReducers } from 'redux';
import weatherReducer from './weather';
import settingsReducer from './settings';
import locationReducer from './location';
import { WeatherState } from '../../types/index';

const reducers = combineReducers({
  weather: weatherReducer,
  settings: settingsReducer,
  location: locationReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
