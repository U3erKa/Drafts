import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LANGUAGES } from 'app/constants';

const languages = [];

for (const language of Object.values(LANGUAGES)) {
  languages.push(language);
}
const initialState = languages.includes(navigator.language as LANGUAGES) ? navigator.language : LANGUAGES.EN_US;

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

export { setLang };
export default reducer;
