import { createSelector, createStructuredSelector, Selector } from 'reselect';
import { SSERootTypes } from '../../../types/rootTypes';
import { ChildState } from './types';

const selectChildState = (state: SSERootTypes) => {
  return state.child;
};

const selectChildContent: Selector<SSERootTypes, ChildState> = createSelector(
  selectChildState,
  (state) => state.content,
);

const selectUpdateChannel: Selector<SSERootTypes, any> = createSelector(
  selectChildState,
  (state) => state.childUpdateChannel,
);

const childSelector = createStructuredSelector({
  content: selectChildContent,
  channel: selectUpdateChannel,
});

export { childSelector };
