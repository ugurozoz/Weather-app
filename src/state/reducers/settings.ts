import { ActionType } from './../action-types';
import { Action } from './../actions';

interface settingsState {}

const initialState: settingsState = {};

const reducer = (state: settingsState = initialState, action: Action) => {
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
