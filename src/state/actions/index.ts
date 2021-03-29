import { Location } from './../location';
import { ActionType } from './../action-types/';


export type Direction = 'up' | 'down';

// export interface MoveCellAction {
//   type: ActionType.MOVE_CELL;
//   payload: {
//     id: string;
//     direction: Direction;
//   };
// }

// export interface DeleteCellAction {
//   type: ActionType.DELETE_CELL;
//   payload: string;
// }

// export interface insertCellAfterAction {
//   type: ActionType.INSERT_CELL_AFTER;
//   payload: {
//     id: string | null;
//     type: CellTypes;
//   };
// }

// export interface UpdateCellAction {
//   type: ActionType.UPDATE_CELL;
//   payload: {
//     id: string;
//     content: string;
//   };
// }

// export interface BundleStartAction {
//   type: ActionType.BUNDLE_START;
//   payload: {
//     cellId: string;
//   };
// }

// export interface BundleCompleteAction {
//   type: ActionType.BUNDLE_COMPLETE;
//   payload: {
//     cellId: string;
//     bundle: {
//       code: string;
//       err: string;
//     };
//   };
// }

/*
 FETCH_LOCATION = 'FETCH_LOCATION',
  FETCH_LOCATION_COMPLETE = 'FETCH_LOCATION_COMPLETE',
  FETCH_LOCATION_ERROR = 'FETCH_LOCATION_ERROR',
*/


export interface FetchLocation {
  type: ActionType.FETCH_LOCATION;
}

export interface FetchLocationComplete {
  type: ActionType.FETCH_LOCATION_COMPLETE;
  payload:Location[];
}

export interface FetchLocationError {
  type: ActionType.FETCH_LOCATION_ERROR;
  payload: string;
}

// export interface SeveCellsError {
//   type: ActionType.SAVE_CELLS_ERROR;
//   payload: string;
// }


export type Action =
  | FetchLocation
  | FetchLocationComplete
  | FetchLocationError
