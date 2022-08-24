import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { appSaga } from 'data/app/saga';
import { reducer as appReducer, sliceKey as appSliceKey } from 'data/app/slice';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  [appSliceKey]: appReducer,
});

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
});

sagaMiddleware.run(appSaga);

export default store;
