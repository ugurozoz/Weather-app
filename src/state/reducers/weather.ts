import { WeatherState } from './../../types/index';
import { ActionType } from './../action-types';
import { Action, FetchWeatherCompleteAction } from './../actions';

const initialState: WeatherState = {
  temperature: 0,
  situation: '',
  nextFiveDays: [],
  windSpeed: 0,
  windDirection: 0,
  windDirectionCompass: '',
  humidity: 0,
  visibility: 0,
  airPressure: 0,
  loading: false,
  weatherDate: '',
};

const fetchWeatherStart = (state: WeatherState) => {
  return { ...state, loading: true };
};

const fetchWeatherFail = (action: Action, state: WeatherState) => {
  console.log(action, state);
  return { ...state, loading: false };
};

const fetchWeatherComplete = (
  action: FetchWeatherCompleteAction,
  state: WeatherState
) => {
  const newState = { ...state };
  //newState.airPressure = action.payload[0]
  //const weatherDataList:<Array>str = action.payload
  const currentValues = action.payload[0];
  newState.temperature = currentValues.the_temp;
  newState.situation = currentValues.weather_state_name;
  newState.nextFiveDays = action.payload.slice(1);
  newState.windSpeed = currentValues.wind_speed;
  newState.windDirection = currentValues.wind_direction;
  newState.windDirectionCompass = currentValues.wind_direction_compass;
  newState.humidity = currentValues.humidity;
  newState.visibility = currentValues.visibility;
  newState.airPressure = currentValues.air_pressure;
  newState.loading = false;

  //console.log(action.payload, 'FIFI');
  return { ...newState };
};

const reducer = (
  state: WeatherState = initialState,
  action: Action
): WeatherState => {
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
