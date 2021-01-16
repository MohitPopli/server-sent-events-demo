import EventSource from 'eventsource';
import { END, eventChannel } from 'redux-saga';
import { EVENT_TYPES } from '../containers/Child/store/constants';

export function subscribeToSSE(eventSrc: EventSource) {
  return eventChannel((emitter) => {
    eventSrc.onopen = (ev: any) => {
      console.info('connection is established');
      emitter(ev);
    };

    eventSrc.onerror = (err: any) => {
      console.error(err);
    };

    eventSrc.addEventListener(EVENT_TYPES.CHILD_UPDATES, (ev: any) => {
      console.info('data event recieved...', ev);
      emitter(ev);
    });

    return () => {
      console.info('closing connection...');
      eventSrc.close();
      emitter(END);
    };
  });
}
