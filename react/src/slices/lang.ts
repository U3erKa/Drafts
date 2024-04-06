import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LANGUAGES } from 'const';

const languages: LANGUAGES[] = Object.values(LANGUAGES);
const initialState: LANGUAGES = languages.includes(navigator.language as LANGUAGES)
  ? (navigator.language as LANGUAGES)
  : LANGUAGES.EN_US;

const langSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    setLang: (state, actions: PayloadAction<LANGUAGES>) => actions.payload,
  },
});

const {
  reducer,
  actions: { setLang },
} = langSlice;

export { setLang, languages };
export default reducer;
