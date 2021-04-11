import { ActionType } from './../action-types/';
import { Weather, Settings, location } from '../../types/';


export type DummyType = 'up' | 'down';

export interface RunDummyAction0 {
  type: ActionType.DUMMY_ACTION_0;
  payload: {
    id: string;
    dummyKey: DummyType;
  };
}

export interface RunDummyAction1 {
  type: ActionType.DUMMY_ACTION_1;
  payload: {
    id: string;
    dummyKey: DummyType;
  };
}

export interface FetchWeatherStartAction {
  type: ActionType.FETCH_WEATHER_START;
  payload?: string;
}

export interface FetchWeatherCompleteAction {
  type: ActionType.FETCH_WEATHER_COMPLETE;
  payload: Weather[];
}

export interface FetchWeatherFailAction {
  type: ActionType.FETCH_WEATHER_FAIL;
  payload: string;
}

export interface changeSettingsStartAction {
  type: ActionType.CHANGE_SETTINGS_START;
  payload: Settings;
}

export interface changeSettingsCompleteAction {
  type: ActionType.CHANGE_SETTINGS_COMPLETE;
}

export interface changeSettingsFailAction {
  type: ActionType.CHANGE_SETTINGS_FAIL;
  payload: string;
}

export interface getCityWoeidStartAction {
  type: ActionType.GET_CITY_WOEID_START;
}

export interface getCityWoeidCompleteAction {
  type: ActionType.GET_CITY_WOEID_COMPLETE;
  payload:location
}

export interface getCityWoeidFailAction {
  type: ActionType.GET_CITY_WOEID_FAIL;
  payload: string;
}

export type Action =
  | RunDummyAction0
  | RunDummyAction1
  | FetchWeatherStartAction
  | FetchWeatherCompleteAction
  | FetchWeatherFailAction
  | changeSettingsStartAction
  | changeSettingsCompleteAction
  | changeSettingsFailAction
  | getCityWoeidStartAction
  | getCityWoeidCompleteAction
  | getCityWoeidFailAction;
