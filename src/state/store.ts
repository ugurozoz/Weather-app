import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

import { ActionType } from './action-types';

// Added for redux developer tools
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
// Added for redux developer tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// Modified for redux developer tools
//export const store = createStore(reducers, {}, applyMiddleware(thunk));
export const store = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(thunk))
);

//toggleTemperatureUnit



//MANUAL TEST
// store.dispatch({
//   type: ActionType.SET_CITY,
//   payload: {
//     "title": "Paris",
//     "location_type": "City",
//     "woeid": 615702,
//     "latt_long": "48.856930,2.341200",
//     "loading":false
//   }
// })

// store.dispatch({
//   type: ActionType.FETCH_WEATHER_COMPLETE,
//   payload: "Error"
// })

// store.dispatch({
//   type: ActionType.INSERT_CELL_AFTER,
//   payload: { id: null, type: 'text'}
// })

// store.dispatch({
//   type: ActionType.INSERT_CELL_AFTER,
//   payload: { id: null, type: 'code'}
// })

// store.dispatch({
//   type: ActionType.INSERT_CELL_AFTER,
//   payload: { id: null, type: 'text'}
// })

// const state = store.getState();
// console.log(state)
