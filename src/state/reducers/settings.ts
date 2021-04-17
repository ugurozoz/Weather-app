import { Settings } from './../../types/index';
import { ActionType } from './../action-types';
import { Action } from './../actions';



const initialState: Settings = {  
  weatherUnit: 'C',
  distanceUnit: 'miles',
  speedUnit: 'mph',

};

const toggleTemperatureUnit = (state: Settings) => {
  const newState = { ...state }
  newState.weatherUnit = newState.weatherUnit === 'C' ? 'F' : 'C';
  return newState
}

const reducer = (state: Settings = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.TOGGLE_TEMPERATURE_UNIT:
      return toggleTemperatureUnit(state);
    
    default:
      return state;
  }
};

export default reducer;
