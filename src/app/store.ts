import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from './slices/counter';
import langReducer from './slices/lang';
import themeReducer from './slices/theme';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    lang: langReducer,
    theme: themeReducer,
  },
});
export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
