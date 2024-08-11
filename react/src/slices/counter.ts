'use no memo';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  step: 1,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers({ reducer }) {
    return {
      increment: reducer((state) => {
        state.count += state.step;
      }),
      decrement: reducer((state) => {
        state.count -= state.step;
      }),
      setStep: reducer((state, action: PayloadAction<string | number>) => {
        state.step = +action.payload;
      }),
    };
  },
});

const {
  reducer,
  actions: { increment, decrement, setStep },
} = counterSlice;

export { increment, decrement, setStep };
export default reducer;
