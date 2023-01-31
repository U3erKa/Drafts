import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit';

export const defaultPendingReducer = (state) => {
  state.isLoading = true;
  state.error = null;
};

export const defaultFulfilledReducer = (state) => {
  state.isLoading = false;
};

export const defaultRejectedReducer = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const decorateAsyncThunk = ({ key, thunk }) => {
  const asyncThunk = createAsyncThunk(key, async (payload, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      return await thunk(payload, thunkAPI);
    } catch (err) {
      return rejectWithValue(err);
    }
  });
  return asyncThunk;
};

export const createExtraReducers =
  <T>({ thunk, pendingReducer, fulfilledReducer, rejectedReducer }: any) =>
  (builder: ActionReducerMapBuilder<T>) => {
    builder
      .addCase(thunk.pending, pendingReducer ?? defaultPendingReducer)
      .addCase(thunk.fulfilled, fulfilledReducer ?? defaultFulfilledReducer)
      .addCase(thunk.rejected, rejectedReducer ?? defaultRejectedReducer);
  };
