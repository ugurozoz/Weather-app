import { Weather } from './../../types/index';
import { ActionType } from './../action-types';
import { Action } from './../actions';

interface weatherState {
  temperature: string;
  situation: string;
  nextFiveDays: [];
  windSpeed: number;
  windDirection: number;
  windDirectionCompass: string;
  humidity: number;
  visibility: number;
  airPressure: number;
  loading: boolean;
}

const initialState: weatherState = {
  temperature: '',
  situation: '',
  nextFiveDays: [],
  windSpeed: 0,
  windDirection: 0,
  windDirectionCompass: '',
  humidity: 0,
  visibility: 0,
  airPressure: 0,
  loading: false,
};

const fetchWeatherStart = (state: weatherState) => {
  console.log();
  return state;
};

const fetchWeatherFail = (action: Action, state: weatherState) => {
  console.log(action, state);
  return state;
};

const fetchWeatherComplete = (action: Action, state: weatherState) => {
  console.log(action, 'FIFI');
  return state;
};

const reducer = (state: weatherState = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.FETCH_WEATHER_START:
      return fetchWeatherStart(state);

    case ActionType.FETCH_WEATHER_COMPLETE:
      return fetchWeatherComplete(action, state);

    case ActionType.FETCH_WEATHER_FAIL:
      return fetchWeatherFail(action, state);

    default:
      return state;
  }
};

export default reducer;
