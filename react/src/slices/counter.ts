'use no memo';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  step: 1,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += state.step;
    },
    decrement: (state) => {
      state.count -= state.step;
    },
    setStep: (state, actions: PayloadAction<string | number>) => {
      state.step = +actions.payload;
    },
  },
});

const {
  reducer,
  actions: { increment, decrement, setStep },
} = counterSlice;

export { increment, decrement, setStep };
export default reducer;
