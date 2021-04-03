import { ActionType } from './../action-types/';


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




export type Action =
  | RunDummyAction0
  | RunDummyAction1
