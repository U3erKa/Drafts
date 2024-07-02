import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import otherCounterReducer from './slices/counter';
import langReducer from './slices/lang';
import themeReducer from './slices/theme';
import counterReducer from 'features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    otherCounter: otherCounterReducer,
    lang: langReducer,
    theme: themeReducer,
  },
});
export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<Return = void> = ThunkAction<Return, RootState, unknown, Action<string>>;
