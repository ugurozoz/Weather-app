import { location } from './../../types/index';
import { ActionType } from './../action-types';
import { Action, getCityWoeidCompleteAction } from './../actions';

const initialState: location = {
  latt_long: '',
  location_type: '',
  title: '',
  woeid: 0,
  loading: false,
};

const getCityWoeidStart = (state: location) => {
  return { ...state, loading: true };
};

const getCityWoeidFail = (action: Action, state: location) => {
  
  return { ...state, loading: false };
};

const getCityWoeidComplete = (
  action: getCityWoeidCompleteAction,
  state: location
) => {
  const newState = { ...state };
  const currentValues = action.payload;
  newState.latt_long = currentValues.latt_long;
  newState.loading = false;
  newState.location_type = currentValues.location_type;
  newState.title = currentValues.title;
  newState.woeid = currentValues.woeid
  return { ...newState };
};

const reducer = (state: location = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.GET_CITY_WOEID_START:
      return getCityWoeidStart(state);

    case ActionType.GET_CITY_WOEID_COMPLETE:
      return getCityWoeidComplete(action, state);

    case ActionType.GET_CITY_WOEID_FAIL:
      return getCityWoeidFail(action, state);

    default:
      return state;
  }
};

export default reducer;
