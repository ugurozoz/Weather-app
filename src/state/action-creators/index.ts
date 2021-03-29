import { Dispatch } from 'redux';
import axios from 'axios';

import { ActionType } from '../action-types';
import {
  FetchLocation,
  FetchLocationComplete,
  FetchLocationError,
  Action
} from '../actions';
import { Location } from './../location';

import { RootState } from '../../state';

// export const updateCell = (id: string, content: string): UpdateCellAction => {
//   return {
//     type: ActionType.UPDATE_CELL,
//     payload: {
//       id,
//       content,
//     },
//   };
// };

// export const deleteCell = (id: string): DeleteCellAction => {
//   return {
//     type: ActionType.DELETE_CELL,
//     payload: id,
//   };
// };

// export const moveCell = (id: string, direction: Direction): MoveCellAction => {
//   return {
//     type: ActionType.MOVE_CELL,
//     payload: {
//       id,
//       direction,
//     },
//   };
// };

export const fetchLocation = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.FETCH_LOCATION });

    try {
      // Data is coming from LOCAL-API it should be an ARRAY
      const { data }: { data: Location[] } = await axios.get('/cells');
      dispatch({
        type: ActionType.FETCH_LOCATION_COMPLETE,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: ActionType.FETCH_LOCATION_ERROR,
        payload: err.message,
      });
    }
  };
};

// export const saveCells = () => {
//   return async (dispatch: Dispatch<Action>, getState: () => RootState) => {
//     const {
//       cells: { data, order },
//     } = getState();

//     const cells = order.map((id) => data[id]);
//     console.log({ cells });
//     try {
//       await axios.post('/cells', { cells });
//     } catch (err) {
//       dispatch({
//         type: ActionType.SAVE_CELLS_ERROR,
//         payload: err.message,
//       });
//     }
//   };
// };
