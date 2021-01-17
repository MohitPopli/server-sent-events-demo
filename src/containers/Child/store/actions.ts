import { action } from 'typesafe-actions';
import { ChildActionTypes } from './constants';

export const subscribe = () => action(ChildActionTypes.SUBSCRIBE_TO_CHILD_UPDATES);

export const unsbscribe = () => action(ChildActionTypes.UNSUBSCRIBE_TO_CHILD_UPDATES);

export const setChannel = (channel: any) => action(ChildActionTypes.SET_UPDATE_CHANNEL, channel);

export const setChildData = (data: any) => action(ChildActionTypes.SET_CHILD_DATA, data);

export const navigateToHome = () => action(ChildActionTypes.NAVIGATE_TO_HOME);