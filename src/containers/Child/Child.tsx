import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { childSelector } from './store/selectors';
import * as ChildActions from './store/actions';
import { ChildContainer, NavigateButton } from '../../components/StyledComponents/Child';

export const Child: React.FC<any> = () => {
  const dispatch = useDispatch();

  const { content } = useSelector(childSelector);

  useEffect(() => {
    dispatch(ChildActions.subscribe());

    // unsubscribe to event source while component unmount.
    return () => {
      dispatch(ChildActions.unsbscribe());
    };
  }, [dispatch]);

  return (
    <ChildContainer>
      <label> {content} </label>
      <NavigateButton type="button" onClick={() => dispatch(ChildActions.navigateToHome())}>BACK</NavigateButton>
    </ChildContainer>
  );
};
