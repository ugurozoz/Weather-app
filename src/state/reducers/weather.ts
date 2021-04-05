import { Weather, WeatherState } from './../../types/index';
import { ActionType } from './../action-types';
import { Action } from './../actions';



const initialState: WeatherState = {
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

const fetchWeatherStart = (state: WeatherState) => {
  console.log();
  return state;
};

const fetchWeatherFail = (action: Action, state: WeatherState) => {
  console.log(action, state);
  return state;
};

const fetchWeatherComplete = (action: Action, state: WeatherState) => {
  console.log(action, 'FIFI');
  return state;
};

const reducer = (state: WeatherState = initialState, action: Action):WeatherState => {
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
