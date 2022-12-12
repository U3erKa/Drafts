import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from './slices/counter';
import langReducer from './slices/lang';
import themeReducer from './slices/theme';
import usersReducer from './slices/users';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    lang: langReducer,
    theme: themeReducer,
    users: usersReducer,
  },
});
export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
