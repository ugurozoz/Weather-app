import { Settings } from './../../types/index';
import { ActionType } from './../action-types';
import { Action } from './../actions';



const initialState: Settings = {  
  weatherUnit: 'F',
  distanceUnit: 'miles',
  speedUnit: 'mph',

};

const reducer = (state: Settings = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.DUMMY_ACTION_0:
      return state;
    case ActionType.DUMMY_ACTION_1:
      return state;
    default:
      return state;
  }
};

export default reducer;
