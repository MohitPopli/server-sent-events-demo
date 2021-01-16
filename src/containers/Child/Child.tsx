import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { childSelector } from './store/selectors';
import * as ChildActions from './store/actions';

export const Child: React.FC<any> = () => {
  const dispatch = useDispatch();

  const { content } = useSelector(childSelector);

  useEffect(() => {
    dispatch(ChildActions.subscribe());

    return () => {
      dispatch(ChildActions.unsbscribe());
    };
  }, [dispatch]);

  // useEffect(()=>{

  // },[content])

  return (
    <div style={{ display: 'flex' }}>
      <label> {content} </label>
    </div>
  );
};
