import { createSelector } from '@reduxjs/toolkit';

import { initialState, sliceKey } from './slice';

const selectDomain = state => state[sliceKey] || initialState;

export const selectCount = createSelector([selectDomain], state => state.count);
