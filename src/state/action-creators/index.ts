import { location } from './../../types/index';
import { Dispatch } from 'redux';
import { Weather } from '../../types/index';
import { ActionType } from '../action-types';
import {
  FetchWeatherStartAction,
  FetchWeatherCompleteAction,
  FetchWeatherFailAction,
  getCityWoeidStartAction,
  getCityWoeidCompleteAction,
  getCityWoeidFailAction,
  setCityAction,
  toggleTemperatureUnitAction,
  Action,
} from '../actions';
import { skipCors } from '../../utilities/skipCors/skipCors';

const apiURL = 'https://www.metaweather.com/api/location/';

export const fetchWeatherStart = (): FetchWeatherStartAction => {
  return {
    type: ActionType.FETCH_WEATHER_START,
  };
};

export const fetchWeatherFail = (error: string): FetchWeatherFailAction => {
  return {
    type: ActionType.FETCH_WEATHER_FAIL,
    payload: error,
  };
};

export const fetchWeatherComplete = (
  data: Weather[]
): FetchWeatherCompleteAction => {
  return {
    type: ActionType.FETCH_WEATHER_COMPLETE,
    payload: data,
  };
};

export const fetchWeather = (woeid: number = 44418) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.FETCH_WEATHER_START });
    // const woeid = '44418'; //Where On Earth ID
    const url = `${apiURL}${woeid}/`;
    //console.log('FETCH WEATHER CALLED', url);
    try {
      const response = await skipCors(url, 'http://weather-cors.trmov.com/', '');
      dispatch<FetchWeatherCompleteAction>({
        type: ActionType.FETCH_WEATHER_COMPLETE,
        payload: response.consolidated_weather,
      });
    } catch (error) {
      dispatch<FetchWeatherFailAction>({
        type: ActionType.FETCH_WEATHER_FAIL,
        payload: error.message,
      });
    }
  };
};

export const setCity = (data: location): setCityAction => {
  return {
    type: ActionType.SET_CITY,
    payload: data,
  };
};

export const getCityWoeidStart = (): getCityWoeidStartAction => {
  return {
    type: ActionType.GET_CITY_WOEID_START,
  };
};

export const getCityWoeidFail = (error: string): getCityWoeidFailAction => {
  return {
    type: ActionType.GET_CITY_WOEID_FAIL,
    payload: error,
  };
};

export const getCityWoeidComplete = (
  data: location
): getCityWoeidCompleteAction => {
  return {
    type: ActionType.GET_CITY_WOEID_COMPLETE,
    payload: data,
  };
};

export const getCityWoeid = (city: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionType.GET_CITY_WOEID_START });
    const url = `${apiURL}search/?query=${city}`;
    //console.log('GET WOID', url);

    try {
      const response = await skipCors(url, 'http://weather-cors.trmov.com/', '');
      //console.log('WOID RESULT', response);
      dispatch<getCityWoeidCompleteAction>({
        type: ActionType.GET_CITY_WOEID_COMPLETE,
        payload: response[0],
      });
    } catch (error) {
      dispatch<getCityWoeidFailAction>({
        type: ActionType.GET_CITY_WOEID_FAIL,
        payload: error.message,
      });
    }
  };
};

export const toggleTemperatureUnit = (): toggleTemperatureUnitAction => {
  return {
    type: ActionType.TOGGLE_TEMPERATURE_UNIT,
  };
};

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

// export const insertCellAfter = (
//   id: string | null,
//   cellType: CellTypes
// ): insertCellAfterAction => {
//   return {
//     type: ActionType.INSERT_CELL_AFTER,
//     payload: {
//       id,
//       type: cellType,
//     },
//   };
// };

// export const createBundle = (cellId: string, input: string) => {
//   return async (dispatch: Dispatch<Action>) => {
//     dispatch({
//       type: ActionType.BUNDLE_START,
//       payload: {
//         cellId,
//       },
//     });

//     const result = await bundle(input);

//     dispatch({
//       type: ActionType.BUNDLE_COMPLETE,
//       payload: {
//         cellId,
//         bundle: {
//           code: result.code,
//           err: result.err,
//         },
//       },
//     });
//   };
// };

// export const fetchCells = () => {
//   return async (dispatch: Dispatch<Action>) => {
//     dispatch({ type: ActionType.FETCH_CELLS });

//     try {
//       // Data is coming from LOCAL-API it should be an ARRAY
//       const { data }: { data: Cell[] } = await axios.get('/cells');
//       dispatch({
//         type: ActionType.FETCH_CELLS_COMPLETE,
//         payload: data,
//       });
//     } catch (err) {
//       dispatch({
//         type: ActionType.FETCH_CELLS_ERROR,
//         payload: err.message,
//       });
//     }
//   };
// };

// export const saveCells = () => {
//   return async (dispatch: Dispatch<Action>, getState: () => RootState) => {
//     const {
//       cells: { data, order },
//     } = getState();

//     const cells = order.map((id) => data[id]);
//     console.log({ cells })
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
