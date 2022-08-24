import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectCount } from 'data/app/selectors';
import { actions as appActions } from 'data/app/slice';
import { Wrapper } from './wrappers';

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);

  const onMinusClick = () => {
    dispatch(appActions.setCount(count - 1));
  };

  const onPlusClick = () => {
    dispatch(appActions.setCount(count + 1));
  };

  return (
    <Wrapper>
      <button type="button" onClick={onMinusClick}>
        -
      </button>
      <span>{count}</span>
      <button type="button" onClick={onPlusClick}>
        +
      </button>
    </Wrapper>
  );
};

export default Counter;
