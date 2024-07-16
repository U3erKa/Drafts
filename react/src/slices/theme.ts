import { createSlice } from '@reduxjs/toolkit';
import { THEMES } from 'lib/const';

const initialState = THEMES.LIGHT;

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state) => (state === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK),
  },
});

const {
  reducer,
  actions: { setTheme },
} = themeSlice;

export { setTheme };
export default reducer;
