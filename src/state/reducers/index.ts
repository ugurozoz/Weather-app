import { combineReducers } from 'redux';
import weatherReducer from './weather';
import settingsReducer from './settings';
import { WeatherState } from '../../types/index';

const reducers = combineReducers({
  weather: weatherReducer,
  settings: settingsReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
