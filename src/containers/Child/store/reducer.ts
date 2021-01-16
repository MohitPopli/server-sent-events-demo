import { ActionType } from 'typesafe-actions';
import produce, { Draft } from 'immer';
import * as childActions from './actions';
import { ChildState } from './types';
import { ChildActionTypes } from './constants';

// Declaring type of actions
export type ChildActions = ActionType<typeof childActions>;

// Initializing state
export const initialState: ChildState = {
  childUpdateChannel: undefined,
  content: '',
};

export const childReducer = (state: ChildState = initialState, action: ChildActions): ChildState => {
  switch (action.type) {
    case ChildActionTypes.SET_UPDATE_CHANNEL:
      return produce(state, (draft: Draft<ChildState>) => {
        draft.childUpdateChannel = action.payload;
      });

    case ChildActionTypes.SET_CHILD_DATA:
      return produce(state, (draft: Draft<ChildState>) => {
        draft.content = action.payload;
      });

    default:
      return state;
  }
};
