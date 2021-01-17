import { call, put, select, take, takeLatest } from 'redux-saga/effects';
import { ChildActionTypes, EVENT_TYPES } from './constants';
import EventSource from 'eventsource';
import { subscribeToSSE } from '../../../utils/SSEUtil';
import * as ChildActions from './actions';
import { UpdateEventType } from './types';
import { childSelector } from './selectors';
import { push } from 'connected-react-router';

function* subscribe() {
  try {
    const eventSrc = new EventSource('http://127.0.0.1:5000/events');
    const channel = yield call(subscribeToSSE, eventSrc);
    yield put(ChildActions.setChannel(channel));

    while (true) {
      const event: UpdateEventType = yield take(channel);
      if (event.type === EVENT_TYPES.CHILD_UPDATES) {
        const data = JSON.parse(String(event.data));
        yield put(ChildActions.setChildData(data.time));
      }
    }
  } catch (error) {
    console.error(error);
  }
}

function* unSubscribe() {
  const { channel } = yield select(childSelector);
  channel.close();
  yield put(ChildActions.setChannel(undefined));
}

function* navigate() {
  yield put(push('/'));
}

function* childSagas() {
  yield takeLatest(ChildActionTypes.SUBSCRIBE_TO_CHILD_UPDATES, subscribe);
  yield takeLatest(ChildActionTypes.UNSUBSCRIBE_TO_CHILD_UPDATES, unSubscribe);
  yield takeLatest(ChildActionTypes.NAVIGATE_TO_HOME, navigate);
}

// eslint-disable-next-line
export default [childSagas];
