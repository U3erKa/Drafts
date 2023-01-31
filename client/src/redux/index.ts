import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user.slice';

import type { ThunkAction, Action } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
