import { RouterState } from 'connected-react-router';
import { ChildState } from '../containers/Child/store/types';

export interface SSERootTypes {
  readonly router: RouterState;
  readonly child: ChildState;
}
